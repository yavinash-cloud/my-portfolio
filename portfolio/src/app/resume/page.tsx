"use client";
import Link from "next/link";
import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import "../../components/animate.css";

const page = () => {
  const handleDownload = () => {
    // Build the file path in the public directory
    const filePath = `/assests/AvinashKr.pdf`;

    // Create an anchor element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "AvinashKr.pdf";

    // Programmatically trigger the click event to start the download
    link.click();
  };
  return (
    <section className=" py-12 relative z-10 uppercase">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl text-center mb-6 lighting-text text-flicker-in-glow text-Rubrik-Distressed"
        >
          HIRE ME!
        </motion.h2>
        <motion.h3
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="p-2 text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400"
        >
          “I think people hire me because I am good at what I love to do.”
        </motion.h3>
        {/* Resume Preview */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="p-8 text-center"
        >
          {/* Resume Content */}
          <div className="lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <p>
              Unlock the door to a world of innovation and creativity. Explore
              my resume to discover how I can contribute to your projects. Ready
              to elevate your team? Hire me and let's create something
              extraordinary together!
            </p>
          </div>
        </motion.div>
        {/* Download Button */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center p-8 mb-4"
        >
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg inline-flex items-center shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
          >
            <RiDownloadLine className="mr-2 animate-bounce" /> Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default page;
