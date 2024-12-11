"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="flex justify-between items-center p-3 bg-blue-800">
        <div className="logo font-bold text-xl cursor-pointer text-blue-400 ">
          <Link href="/" className='flex justify-center items-center'>
          <span>
          <Image className=" w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" width="200" height="100" alt="logo"/>
          </span>
          <span></span>e-Store</Link>
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
          <Link href="/homePage" className="hover:text-black">Home</Link>
          <Link href="/blog" className="hover:text-black">blog</Link>
          <Link href="/about" className="hover:text-black">About us</Link>
          <Link href="/courses" className="hover:text-black">Courses</Link>
        </div>

        {/* Login/Logout (Visible on larger screens) */}
        <div className="hidden lg:flex space-x-3 text-lime-100">
          <Link href="/login" className="hover:text-black">Login</Link>
          <Link href="/signup" className="hover:text-black">Logout</Link>
        </div>
      </nav>

      {/* Mobile Menu (Toggled on small screens) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-800 text-blue-100 p-3`}
      >
        <Link href="/homePage" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Home</Link>
        <Link href="/blog" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">blog</Link>
        <Link href="/courses" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Courses</Link>
        <Link href="/about" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">About us</Link>
        <Link href="/login" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Login</Link>
        <Link href="/signup" className="block py-2 hover:text-blue-800 hover:bg-white hover:p-2 rounded">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
