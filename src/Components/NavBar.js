import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full  shadow-sm h-[10vh] relative z-50 ">
      <div className="max-w-7xl mx-auto flex items-center h-full justify-between px-6 ">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-full">
          <img src="/logo.jpeg" alt="Cash For Gold" className="h-full" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-yellow-600">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us" className="hover:text-yellow-600">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-yellow-600">
              Services
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:text-yellow-600">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Overlay) */}
        {isOpen && (
          <div className="md:hidden absolute top-[10vh] left-0 w-full bg-[#d9d9d9] shadow-lg py-4 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-600"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-yellow-600"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-yellow-600"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-yellow-600"
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Login Button */}
        {/* <button className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2 rounded-full">
          Login
        </button> */}
      </div>
    </nav>
  );
}
