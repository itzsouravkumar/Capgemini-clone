"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "Insights",
      dropdown: [
        "Reshape your future with AI",
        "Leading sustainability",
        "The future of technology",
        "Marketing for customer experience",
        "Initiatives with the World Economic Forum",
        "Our research library",
        "Expert perspectives",
      ],
    },
    { label: "Industries" },
    { label: "Services" },
    { label: "Careers" },
    { label: "News" },
    { label: "About us" },
  ];

  const topRightItems = [
    { label: "Contact us", href: "#" },
    { label: "Investors", href: "#", external: true },
    { label: "Global | EN 🌐", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 py-2 sm:py-3 transition-all duration-300 ${
        isScrolled || menuOpen ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      style={{
        backgroundColor: isScrolled || menuOpen ? "#fff" : undefined,
        transition: "background-color 0.2s, padding 0.3s",
        paddingTop: isScrolled ? "0" : "0.5rem",
        paddingBottom: isScrolled ? "0" : "0.5rem",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Top Bar */}
        <div className="hidden lg:flex justify-end space-x-6 text-sm text-gray-900 font-medium">
          <div
            className={`
          flex transition-all duration-600 ease-in-out
          ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
          text-[15px] font-medium space-x-6 items-center
          ${menuOpen || isScrolled ? "text-gray-900" : "text-white"}
        `}
            style={{
              willChange: "opacity, transform",
              letterSpacing: "1px",
              fontFamily: "Ubuntu",
              transformOrigin: "top right",
              transform: isScrolled
                ? "scale(0) translate(100%, -100%)"
                : "scale(1) translate(0, 0)",
              transition:
                "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
            }}
          >
            {topRightItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative group flex items-center space-x-1 transition-colors hover:text-[#0070ad]"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#0070ad] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                </span>
                {item.external && <span className="text-xs">↗</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <div
          className="w-full flex items-center justify-between py-2 sm:py-3"
          style={{
            paddingLeft: "6px",
            paddingRight: "6px",
            transform: "translateY(-10px)",
          }}
        >
          {/* Logo + Nav */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-12">
            <Link href="/">
              <Image
                src={
                  isScrolled || menuOpen
                    ? "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                    : "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"
                }
                alt="Capgemini Logo"
                width={140}
                height={40}
                priority
              />
            </Link>

            <nav
              className={`hidden lg:flex space-x-4 sm:space-x-8 text-[15px] font-medium transition-colors duration-200 ${
                isScrolled || menuOpen ? "text-gray-900" : "text-white"
              }`}
              style={{ fontFamily: "Ubuntu" }}
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href="#"
                    className="relative group transition-colors hover:text-[#0070ad]"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#0070ad] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                  </Link>
                  {/* Dropdown */}
                  {item.dropdown && hoveredIndex === index && (
                    <div className="absolute top-full left-0 w-full max-w-[95vw] sm:w-[400px] md:w-[600px] bg-white text-black shadow-lg p-6 mt-3 flex z-40">
                      {/* Left Sidebar */}
                      <div className="w-1/3 pr-6 border-r hidden md:block">
                        <h4 className="font-bold text-lg mb-2">Insights</h4>
                        <p className="text-sm text-gray-600">
                          Explore our latest thought leadership, ideas, and
                          insights.
                        </p>
                      </div>
                      {/* Right Options */}
                      <div className="grid gap-3 text-sm w-full md:w-2/3">
                        {item.dropdown.map((option, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="hover:text-[#0070ad] transition-colors"
                            style={{
                              fontFamily: "Ubuntu",
                              fontSize: "16px",
                              margin: 0,
                              listStyle: "none",
                              marginLeft: "2rem",
                              marginRight: "2rem",
                              position: "relative",
                              columnFill: "auto",
                              columnGap: 0,
                              height: "100%",
                            }}
                          >
                            {option}
                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#0070ad] opacity-0 scale-x-0 hover:opacity-100 hover:scale-x-100 transition-all duration-300 origin-left"></span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Search Icon */}
          <div
            className={`cursor-pointer hidden lg:flex items-center text-sm font-medium text-[15px] space-x-3 duration-200 ${
              isScrolled || menuOpen ? "text-gray-900" : "text-white"
            }`}
            style={{ fontFamily: "Ubuntu" }}
          >
            <span className="cursor-pointer">Search</span>
            <img
              src={
                isScrolled || menuOpen
                  ? "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/icon-search-dark.svg"
                  : "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/icon-search-white.svg"
              }
              alt="Search"
              className="w-4 h-4"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t text-sm font-medium text-gray-900 space-y-3 bg-white">
            <hr />
            {/* Mobile Nav Items */}
            <div className="flex flex-col gap-2 mb-2">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative">
                  <Link
                    href="#"
                    className="block px-2 py-2 hover:text-[#0070ad] font-medium"
                  >
                    {item.label}
                  </Link>
                  {/* Show dropdown options for Insights on mobile */}
                  {item.dropdown && (
                    <div className="pl-4 flex flex-col gap-1 mt-1">
                      {item.dropdown.map((option, oidx) => (
                        <Link
                          key={oidx}
                          href="#"
                          className="block px-2 py-1 text-[15px] text-gray-700 hover:text-[#0070ad]"
                        >
                          {option}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {topRightItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-2 py-1 hover:text-[#0070ad]"
              >
                {item.label} {item.external && "↗"}
              </Link>
            ))}
            <div className="flex items-center px-2 pt-2">
              <span className="mr-2">Search</span>
              <img
                src="https://img.icons8.com/ios/20/search--v1.png"
                alt="Search"
                className="w-4 h-4"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
