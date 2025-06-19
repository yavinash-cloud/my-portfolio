"use client";
import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import "../../components/animate.css";
import { getYearsOfExperience } from "../../utils/helper";

let experienceYears = getYearsOfExperience();
// Replace with your Google Docs PDF download link
const RESUME_LINK =
  "https://docs.google.com/document/d/1LlQM5iL387mCMljp8Ait9cfi_0wAIH5K/export?format=pdf";

const ResumePage = () => {
  return (
    <section className="py-12 relative z-10 uppercase">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl text-center mb-6 lighting-text text-flicker-in-glow text-Rubrik-Distressed lg:m-12"
        >
          Hire Me!
        </motion.h2>

        <motion.h3
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="p-2 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400"
        >
          “I believe people hire me because I craft quality with passion.”
        </motion.h3>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="p-8 text-center"
        >
          <p className="lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold max-w-3xl mx-auto">
            Ready to elevate your product with beautiful, performant, and
            scalable frontends? Download my resume and discover how{" "}
            {experienceYears}+ years of full-stack expertise can bring real
            impact to your team.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="show"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center p-8 mb-4"
        >
          <a
            href={RESUME_LINK}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg inline-flex items-center shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition-all duration-300"
          >
            <RiDownloadLine className="mr-2 animate-bounce" /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumePage;
