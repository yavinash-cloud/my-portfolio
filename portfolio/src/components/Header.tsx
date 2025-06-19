"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "@/utils/Logo";
import { Nosifer } from "next/font/google";

const nosifier = Nosifer({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-cyan-400 font-bold scale-105"
      : "text-white hover:text-gray-300";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-30 transition-all ${
        scrolling || isNavOpen
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex gap-6 text-sm uppercase font-semibold ${nosifier.className}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${isActive(link.href)} transition-transform duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleNav}
          className="md:hidden flex flex-col h-10 w-10 justify-center items-center group border border-white rounded"
        >
          <div
            className={`h-1 w-6 my-1 bg-white rounded transition-all ${
              isNavOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`h-1 w-6 my-1 bg-white rounded transition-all ${
              isNavOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`h-1 w-6 my-1 bg-white rounded transition-all ${
              isNavOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-40 transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl uppercase font-bold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleNav}
              className={`${isActive(link.href)} transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
