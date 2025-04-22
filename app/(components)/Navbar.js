// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo + Nav links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image src={logo} alt="Logo" className="pb-2.5 md:w-24" />
          </Link>
          <div className="hidden md:flex gap-6 text-lg font-bold">
            <Link href="#" className="text-black hover:text-orange-600 ml-5">
              Home
            </Link>
            <Link href="#" className="text-black hover:text-orange-600 ml-5">
              Pricing
            </Link>
            <Link href="#" className="text-black hover:text-orange-600 ml-5">
              Community
            </Link>
          </div>
        </div>

        {/* Right side: Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-8 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-lg font-bold hover:text-orange-500">
            Book a demo
          </button>
          <button className="px-8 py-3 bg-orange-600 text-white text-lg font-bold rounded-lg hover:bg-orange-700">
            Get started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 md:hidden">
          {/* Top - Logo + Close Button */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image src={logo} alt="Logo" className="w-16" />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Middle - Navigation Links */}
          <div className="flex justify-between flex-col gap-[20rem]">
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-lg font-medium text-gray-700">
                Home
              </Link>
              <hr className="text-gray-400" />
              <Link href="#" className="text-lg font-medium text-gray-700">
                About
              </Link>
              <hr className="text-gray-400" />
              <Link href="#" className="text-lg font-medium text-gray-700">
                Services
              </Link>
              <hr className="text-gray-400" />
            </div>

            {/* Bottom - Action Buttons */}
            <div className="flex flex-col gap-3 pt-8 w-1/2">
              <button className="px-8 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-lg font-bold hover:text-orange-500">
                Book a demo
              </button>
              <button className="px-8 py-3 bg-orange-600 text-white text-lg font-bold rounded-lg hover:bg-orange-700">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
