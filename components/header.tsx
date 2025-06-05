'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const prevScrollY = useRef(0);

  const navItems = [
    'Insights',
    'Industries',
    'Services',
    'Careers',
    'News',
    'About us',
  ];

  const topRightItems = [
    { label: 'Contact us', href: '#' },
    { label: 'Investors', href: '#', external: true },
    { label: 'Global | EN 🌐', href: '#' },
  ];

  useEffect(() => {
    setHasMounted(true); // hydration complete

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > prevScrollY.current) {
        setShowTopBar(false); // scroll down
      } else {
        setShowTopBar(true); // scroll up
      }

      setIsScrolled(currentY > 10);

      prevScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial scroll state correctly on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hasMounted) return null; // Prevents hydration mismatch

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        {/* Top Bar */}
        <div
          className={`hidden lg:flex justify-end pt-3 space-x-6 text-sm text-gray-800 font-medium transition-all duration-300 ${
            showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          {topRightItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-blue-600 flex items-center space-x-1 border-b-2 border-transparent hover:border-blue-600 transition-colors"
            >
              <span>{item.label}</span>
              {item.external && <span className="text-xs">↗</span>}
            </Link>
          ))}
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <Image
              src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
              alt="Capgemini Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          <nav className="hidden lg:flex space-x-6 text-sm font-medium text-gray-900">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center text-sm font-medium text-gray-800 space-x-1">
            <span className="hover:text-blue-600 cursor-pointer">Search</span>
            <img
              src="https://img.icons8.com/ios/20/search--v1.png"
              alt="Search"
              className="w-4 h-4"
            />
          </div>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✖' : '☰'}
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
                {item.label} {item.external && '↗'}
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
