"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "Insights",
    "Industries",
    "Services",
    "Careers",
    "News",
    "About us",
  ];

  const topRightItems = [
    { label: "Contact us", href: "#" },
    { label: "Investors", href: "#", external: true },
    { label: "Global | EN 🌐", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-shadow duration-300 sticky top-0 ${
        scrolled ? "border-b bg-white border-gray-200 z-70" : "bg-transparent z-70"
      }`}
    >
     
      <div className={`max-w-screen-2xl mx-auto px-4 lg:px-8 relative ${!scrolled ? "bg-black" : "bg-white"}`}>
        
        {!scrolled ? <nav
          className={`hidden sm:flex flex-row space-x-7 font-medium justify-end py-3 text-white transition-transform transition-opacity duration-700 ease-in-out ${
            scrolled ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {topRightItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative group transition-colors duration-300 ease-in-out hover:text-[#0072CE]"
            >
              <span>{item.label}</span>
              <span className="h-[10px] w-full bg-[#0072CE] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-transform transition-opacity duration-300 ease-in-out origin-right" />
            </Link>
          ))}
        </nav> : null}
        {/* Main Header */}
        <div className="flex items-center justify-between py-5.5 px-4 relative z-20">
          {/* Logo + Nav */}
          <div className="flex items-center gap-16">
            <Link href="/" className="relative z-80">
              <Image
                src= {`${scrolled ? "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg" : "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"}`}
                alt="Capgemini Logo"
                width={180}
                height={45}
                priority
              />
            </Link>

            <nav className={`hidden sm:flex flex-row space-x-7 font-medium ${scrolled ? "text-gray-900" : "text-white"}`}>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="relative group transition-colors duration-300 ease-in-out hover:text-[#0072CE]"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#0072CE] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-transform transition-opacity duration-300 ease-in-out origin-left" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Icon */}
          <div className={`cursor-pointer hidden lg:flex items-center font-medium text-gray-800 space-x-3 ${scrolled ? "text-gray-900" : "text-white"} transition-colors duration-300 ease-in-out hover:text-[#0072CE]`}>
            <span className="cursor-pointer">Search</span>
            <img
              src="https://img.icons8.com/ios/20/search--v1.png"
              alt="Search"
              className="w-4 h-4"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl transition-colors duration-300 ease-in-out hover:text-[#0072CE]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t text-sm font-medium text-gray-800 space-y-3 bg-white">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="block px-2 py-1 hover:text-[#0072CE]"
              >
                {item}
              </Link>
            ))}
            <hr />
            {topRightItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-2 py-1 hover:text-[#0072CE]"
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
