"use client";
import Link from "next/link";
import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const page = () => {
  return (
    <section className=" py-12 relative z-10">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-semibold text-center mb-6"
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
          <Link
            href="/path-to-your-resume.pdf" // Replace with your resume file path
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg inline-flex items-center"
          >
            <RiDownloadLine className="mr-2" /> Download Resume
          </Link>
        </motion.div>

        {/* Additional Resume Sections */}
        {/* You can add more sections here, such as Skills, Experience, Education, etc. */}
      </div>
    </section>
  );
};

export default page;
