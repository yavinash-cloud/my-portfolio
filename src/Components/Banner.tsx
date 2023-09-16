"use client";
import React from "react";
// images
import Image from "next/image";
import V_Avi from "../../public/assests/1548.svg";
// Icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../utils/variants";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left  space-y-4">
            <h1 className="text-white text-[30px] font-bold leading-[0.8] lg:text-[50px]">
              Hello, World! 👋
            </h1>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-[30px] font-bold leading-[0.8] lg:text-[50px]"
            >
              I'm <span className="text-green-400">AVINASH KUMAR</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[30px] font-semibold uppercase leading-[1] pt-4"
            >
              <span className="mr-4 text-white-400">a passionate</span>
              <TypeAnimation
                sequence={[
                  "Frontend",
                  2000,
                  "React.Js",
                  2000,
                  "Next.Js",
                  2000,
                  "Javascript❤️",
                  2000,
                  "👨‍💻 Web",
                  2000,
                ]}
                speed={50}
                className="text-cyan-200"
                repeat={Infinity}
                wrapper="span"
              />
              <span className="mr-4 text-yellow-200">Developer</span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 pt-6"
            >
              <ul
                role="list"
                className="marker:text-sky-200 list-disc pl-5 space-y-3 text-white"
              >
                <li>Frontend Wizardry🪄: Where Innovation Meets Design</li>
                <li>Building Delightful UX 🤩 </li>
                <li>Everything from concept to creation ✨</li>
              </ul>
            </motion.p>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 pt-6"
            >
              <Link href="">
                <FaYoutube />
              </Link>
              <Link href="">
                <FaGithub />
              </Link>
              <Link href="">
                <FaDribbble />
              </Link>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482px]"
          >
            <Image src={V_Avi} alt="avinash_pic" width={500} height={2000} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
