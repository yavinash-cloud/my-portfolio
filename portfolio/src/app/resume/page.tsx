"use client";
import Link from "next/link";
import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import "../../components/banner.css";

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
          className="text-3xl font-semibold text-center mb-6 lighting-text text-flicker-in-glow"
        >
          Download My Resume
        </motion.h2>

        {/* Resume Preview */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="p-8"
        >
          {/* Resume Content */}
          <div className="mb-4">
            <p>
              Unlock the door to a world of innovation and creativity. Download
              my resume to discover how I can transform your digital projects
              into masterpieces.
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
