import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 overflow-hidden">
      <nav className="relative z-20 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Left Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-52">
            <a href="/">
              <img src="/images/ORBIT SCHOOL White.png" alt="Orbit School" />
            </a>
          </div>
        </div>

        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 text-white font-medium text-sm">
          <a href="/" className="hover:text-blue-300 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-300 transition">
            About
          </a>
          <a href="/solutions" className="hover:text-blue-300 transition">
            Solutions
          </a>
          <a href="/success-stories" className="hover:text-blue-300 transition">
            Success Stories
          </a>
          <a
            href="/financial-impact"
            className="hover:text-blue-300 transition"
          >
            Financial Impact
          </a>
          <a href="/implementation" className="hover:text-blue-300 transition">
            Implementation
          </a>
          <a href="/business-models" className="hover:text-blue-300 transition">
            Business Models
          </a>
        </div>

        {/* Right Button (Desktop) */}
        <a
          href="https://edprowise.com/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-6 py-2 bg-white text-blue-900 rounded-full font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
        >
          Contact Us
        </a>

        {/* Hamburger (Mobile) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white"
          aria-label="Open main menu"
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[99] md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={toggleMenu}
          ></div>

          {/* Slide-in Menu from Right */}
          <div
            className={`absolute inset-y-0 right-0 w-64 bg-blue-900 text-white shadow-xl transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <span className="font-semibold text-lg">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-white/10"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">
              <a
                href="/"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="/solutions"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                Solutions
              </a>
              <a
                href="/success-stories"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                Success Stories
              </a>
              <a
                href="/financial-impact"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                Financial Impact
              </a>
              <a
                href="/implementation"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                Implementation
              </a>
              <a
                href="/business-models"
                className="hover:text-blue-300 transition"
                onClick={toggleMenu}
              >
                Business Models
              </a>

              <a
                href="https://edprowise.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 px-6 py-2 bg-white text-blue-900 rounded-full font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
