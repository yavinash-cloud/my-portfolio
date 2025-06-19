import Link from "next/link";
import React from "react";
import { FaHome, FaUser, FaClipboardList, FaBriefcase } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full z-50">
      <div className="container mx-auto">
        <div className="bg-black/30 backdrop-blur-md h-[70px] rounded-full max-w-[420px] mx-auto px-5 flex justify-between items-center text-white/80 text-2xl">
          <Link
            href="/"
            aria-label="Home"
            className="hover:text-white transition-colors duration-200"
          >
            <FaHome />
          </Link>
          <Link
            href="/about"
            aria-label="About"
            className="hover:text-white transition-colors duration-200"
          >
            <FaUser />
          </Link>
          <Link
            href="/projects"
            aria-label="Projects"
            className="hover:text-white transition-colors duration-200"
          >
            <FaClipboardList />
          </Link>
          <Link
            href="/work"
            aria-label="Work Experience"
            className="hover:text-white transition-colors duration-200"
          >
            <FaBriefcase />
          </Link>
          <Link
            href="/contact"
            aria-label="Contact"
            className="hover:text-white transition-colors duration-200"
          >
            <HiMail />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Nav);
