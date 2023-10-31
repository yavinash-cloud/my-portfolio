"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./animate.css";
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
      ? "hover:scale-125 text-glow font-bold"
      : "hover:text-gray-200 hover:scale-125";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // You can adjust the scroll threshold (100 in this case) as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <header
      className={`  lg:py-5  z-20 sticky -top-0.5 transition-all ${
        scrolling || isNavOpen
          ? "bg-gradient-to-r from-gray-700 via-gray-900 to-black py-3 shadow-md "
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 ">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav
          className={`hidden lg:flex md:flex sm:flex space-x-6  ${nosifier.className} text-xs lg:text-sm`}
        >
          <Link href="/" as={`/`} className={`text-white  ${isActive("/")}`}>
            Home
          </Link>
          <Link
            href="/about"
            as={`/about`}
            className={`text-white  ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            href="/skills"
            as={`/skills`}
            className={`text-white  ${isActive("/skills")}`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            as={`/projects`}
            className={`text-white  ${isActive("/projects")}`}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            as={`/resume`}
            className={`text-white  ${isActive("/resume")}`}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            as={`/contact`}
            className={`text-white  ${isActive("/contact")}`}
          >
            Contact
          </Link>
        </nav>
        <div className="lg:hidden md:hidden sm:hidden flex">
          <button
            className="flex flex-col h-10 w-10 mr-2 border-2 border-white rounded justify-center items-center group"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>

          <div
            className={
              isNavOpen
                ? "absolute w-full h-screen mt-12 left-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 flex flex-col justify-evenly items-center"
                : "hidden"
            }
          >
            <ul
              className={`flex flex-col items-center justify-between top-8 mt-2  ${nosifier.className} font-bold text-xl text-purple-500 -mt-56`}
            >
              <Link
                href="/"
                className={`  ${isActive(
                  "/"
                )} border-b border-gray-400 my-6 -mt-32 uppercase`}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`  ${isActive(
                  "/about"
                )} border-b border-gray-400 my-6 uppercase`}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                About
              </Link>
              <Link
                href="/skills"
                className={`  ${isActive(
                  "/skills"
                )} border-b border-gray-400 my-6 uppercase`}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className={`  ${isActive(
                  "/projects"
                )} border-b border-gray-400 my-6 uppercase`}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                Projects
              </Link>
              <Link
                href="/resume"
                className={`  ${isActive(
                  "/resume"
                )} border-b border-gray-400 my-6 uppercase`}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className={`  ${isActive(
                  "/contact"
                )} border-b border-gray-400 my-6 uppercase`}
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
