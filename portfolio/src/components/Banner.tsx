"use client";
import React from "react";
// images
import Image from "next/image";
import V_Avi from "../../public/assests/1548.svg";
import "../components/banner.css";
// Icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../utils/variants";
import Link from "next/link";
import WavingHand from "./Waving";
import "./glow.css";
import IconsContact from "./IconsContact";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] lg:min-h-[78vh] flex items-center -mt-10"
    >
      <div className="container mx-auto uppercase">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left  space-y-4">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-[26px] font-bold leading-[0.8] lg:text-[40px]"
            >
              HELLO, W🌏RLD!
              <WavingHand />
            </motion.h1>
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-[20px] font-bold leading-[0.8] lg:text-[40px]"
            >
              I'm{" "}
              <span className="text-flicker-in-glow name text-green-400   text-[30px] font-bold leading-[0.8] lg:text-[50px]">
                A
                <span className="text-[20px]  lg:text-[40px]  text-green-200    leading-[0.8] ">
                  VINASH{"   "}
                </span>
                {"   "}K
                <span className="text-[20px]  lg:text-[40px] text-green-200  leading-[0.8]">
                  UMAR
                </span>
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[16px] lg:text-[24px] font-semibold uppercase leading-[1] pt-4"
            >
              <span className="mr-2 text-white-400">A passionate</span>
              <span className="glow">
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
                    "👨‍💻 Web",
                    2000,
                  ]}
                  speed={50}
                  className="text-cyan-200"
                  repeat={Infinity}
                  wrapper="span"
                />

                <span className="mr-4 text-cyan-100">Developer</span>
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 pt-6"
            >
              <motion.ul
                role="list"
                className="marker:text-sky-200 list-disc pl-5 space-y-3 text-white"
              >
                <li>Frontend Wizardry🪄: Where Innovation Meets Design</li>
                <li>Building Delightful UX 🤩 </li>
                <li>Everything from concept to creation ✨</li>
              </motion.ul>
            </motion.p>
            {/* socials */}
            <IconsContact />
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[520px] lg:mx-w-[582px]"
          >
            {/* <Image src={V_Avi} alt="avinash_pic" width={500} height={2000} /> */}
            {/* <img
              alt="Web developer working on project  3D Illustration"
              loading="lazy"
              width={1000}
              height={4000}
              src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-project-6343303-5242452.png?f=webp"
              srcSet="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-project-6343303-5242452.png?f=webp 1x, https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-project-6343303-5242452.png?f=webp 2x"
            ></img> */}
            <img
              alt="Web developer working on laptop  3D Illustration"
              loading="lazy"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-laptop-6343300-5242454.png?f=webp"
              srcSet="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-laptop-6343300-5242454.png?f=webp 1x, https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-laptop-6343300-5242454.png?f=webp 2x"
              width={1000}
              height={4000}
            ></img>
            {/* <video>
              <source
                // loading="lazy"
                // muted="muted"
                src="https://cdnl.iconscout.com/lottie/premium/thumb/java-developer-3574030-3099681.mp4"
                type="video/mp4"
                // autoplay="autoplay"
                // loop="loop"
                className="mtz-vlc-dkbcc mtz-mdkio"
              ></source>
            </video> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
