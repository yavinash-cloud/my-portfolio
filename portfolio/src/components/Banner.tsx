"use client";
import React, { useEffect, useState } from "react";
// images
import Image from "next/image";
import "../components/animate.css";
// Icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../utils/variants";
import WavingHand from "./Waving";
import IconsContact from "./IconsContact";
import "./animate.css";

const Banner = () => {
  return (
    <section
      id="home"
      className=" lg:min-h-screen flex items-center lg:-mt-14 lg:-mb-12 "
    >
      <div className="container mx-auto uppercase">
        <div className="flex flex-col gap-y-8 md:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="lg:flex-1 sm:flex-1 text-center font-secondary lg:text-left lg:space-y-4 ">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-[18px] my-8 font-bold leading-[0.8] lg:text-[30px] sm:text-[15px]"
            >
              HELLO, W🌏RLD!
              <WavingHand />
            </motion.h1>
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-lg my-4 font-bold leading-[0.8] lg:text-2xl sm:text-[15px]"
            >
              I'm{" "}
              <span className="text-flicker-in-glow name text-green-300 font-bold leading-[0.8] lg:text-[50px] text-3xl">
                A
                <span className=" text-xl lg:text-[40px]  text-green-200    leading-[0.8] ">
                  VINASH{"   "}
                </span>
                {"   "}K
                <span className="text-xl lg:text-[40px] text-green-200  leading-[0.8]">
                  UMAR
                </span>
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="lg:mb-6 text-sm my-8 lg:text-xl font-semibold uppercase leading-[1] lg:pt-4"
            >
              <span className="mr-2 text-white">A passionate</span>
              <span className="text-glow relative z-10">
                <TypeAnimation
                  sequence={[
                    "Frontend",
                    2000,
                    "React.Js",
                    2000,
                    "Next.Js",
                    2000,
                    "Javascript",
                    2000,
                    "Fullstack",
                    2000,
                  ]}
                  speed={50}
                  className="text-cyan-100"
                  repeat={Infinity}
                  wrapper="span"
                />

                <span className="mr-4 text-cyan-100">Developer</span>
              </span>
            </motion.div>
            <div className="sm:hidden flex justify-center items-center -m-20 -top-14 -mb-28">
              <Image
                alt="Web developer working on laptop  3D Illustration"
                // loading="lazy"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-laptop-6343300-5242454.png?f=webp"
                width={300}
                height={200}
                priority={true}
              ></Image>
            </div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:mb-6 lg:max-w-lg mx-auto lg:mx-0 lg:pt-6 lg:mt-10 lg:text-base my-16 ml-6 text-sm"
            >
              <motion.ul
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                role="list"
                className="marker:text-sky-200 list-disc pl-5 space-y-3 text-white lg:font-bold text-start"
              >
                <li>Frontend Wizardry🪄: Where Innovation Meets Design</li>
                <li>Building Delightful UX 🤩 </li>
                <li>Everything from concept to creation ✨</li>
              </motion.ul>
            </motion.p>
            {/* socials */}
            <div className="mb-8">
              <IconsContact />
            </div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex sm:flex flex-1 max-w-[520px] lg:mx-w-[582px]"
          >
            <Image
              alt="Web developer working on laptop  3D Illustration"
              // loading="lazy"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-laptop-6343300-5242454.png?f=webp"
              width={1000}
              height={4000}
              priority={true}
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Banner);
