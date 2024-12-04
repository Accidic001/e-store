"use client"

import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="flex justify-between items-center p-3 bg-blue-800">
        <div className="logo font-bold text-xl cursor-pointer text-blue-400">
          <a href="/">e-Store</a>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-blue-100 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links (Visible on larger screens) */}
        <div className="hidden lg:flex space-x-3 text-blue-100">
          <a href="/homePage" className="hover:text-black">Home</a>
          <a href="/blog" className="hover:text-black">blog</a>
          <a href="/about" className="hover:text-black">About us</a>
          <a href="/courses" className="hover:text-black">Courses</a>
        </div>

        {/* Login/Logout (Visible on larger screens) */}
        <div className="hidden lg:flex space-x-3 text-lime-100">
          <a href="/" className="hover:text-black">Login</a>
          <a href="/" className="hover:text-black">Logout</a>
        </div>
      </nav>

      {/* Mobile Menu (Toggled on small screens) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-800 text-blue-100 p-3`}
      >
        <a href="/homePage" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Home</a>
        <a href="/blog" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">blog</a>
        <a href="/courses" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Courses</a>
        <a href="/about" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">About us</a>
        <a href="/" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Login</a>
        <a href="/" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Logout</a>
      </div>
    </div>
  );
}

export default Navbar;
