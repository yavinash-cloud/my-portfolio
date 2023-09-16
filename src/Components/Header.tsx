"use client";
import Link from "next/link";
import React from "react";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Header = () => {
  return (
    <header className=" py-4 lg:py-8 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKY-Logo-Design-Graphics-3386280-1.jpg"
              alt="logo"
              className="w-12 lg:w-20"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-10">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/skills" className="text-white hover:text-gray-400">
            Skills
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
          <Link href="/resume" className="text-white hover:text-gray-400">
            Resume
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </nav>
        <div className="lg:hidden">
          {/* Add your responsive menu button here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
