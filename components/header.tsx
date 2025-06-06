"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 py-3">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        {/* Top Bar */}
        <div className="hidden lg:flex justify-end space-x-6 text-sm text-gray-800 font-medium">
          {topRightItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative group flex items-center space-x-1 transition-colors hover:text-aqua-600"
            >
              <span className="relative">
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-aqua-600 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left block"></span>
              </span>
              {item.external && <span className="text-xs">↗</span>}
            </Link>
          ))}
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-3">
          {/* Logo + Nav */}
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image
                src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                alt="Capgemini Logo"
                width={180}
                height={45}
                priority
              />
            </Link>

            <nav className="hidden lg:flex space-x-8 text-sm font-medium text-gray-900">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="relative group transition-colors hover:text-blue"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-500 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Icon */}
          <div className="cursor-pointer hidden lg:flex items-center text-sm font-medium text-gray-800 space-x-3">
            <span className="cursor-pointer">Search</span>
            <img
              src="https://img.icons8.com/ios/20/search--v1.png"
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
          <div className="lg:hidden py-4 border-t text-sm font-medium text-gray-800 space-y-3 bg-white">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="block px-2 py-1 hover:text-blue-700"
              >
                {item}
              </Link>
            ))}
            <hr />
            {topRightItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-2 py-1 hover:text-blue-700"
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
