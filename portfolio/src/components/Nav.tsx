import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaRegUser as FaUser,
  FaClipboardList,
  FaBriefcase,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Nav = () => {
  return (
    <div>
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/80 items-center">
            <Link href="/about" className="text-white hover:text-gray-400">
              About
              <FaHome />
            </Link>
            <Link href="/projects" className="text-white hover:text-gray-400">
              <FaUser />
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              <FaClipboardList />
            </Link>
            <Link href="/work" className="text-white hover:text-gray-400">
              <FaBriefcase />
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-400">
              <HiMail />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Nav);
