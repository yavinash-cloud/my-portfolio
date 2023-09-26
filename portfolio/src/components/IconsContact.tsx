import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareThreads, FaMedium } from "react-icons/fa6";

const IconsContact = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-row space-x-4 pl-4"
    >
      <IconContext.Provider value={{ className: "shared-class", size: "30" }}>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yavinash-cloud"
        >
          <FaGithub />
        </Link>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/imyadavinash/"
        >
          <FaInstagram />
        </Link>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/login"
        >
          <FaTwitter />
        </Link>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.threads.net/@imyadavinash"
        >
          <FaSquareThreads />
        </Link>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.linkedin.com/in/avinashydv"
        >
          <FaLinkedin />
        </Link>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/@JSMaestro"
        >
          <FaYoutube />
        </Link>
        <Link
          prefetch={true}
          rel="noopener noreferrer"
          target="_blank"
          href="https://medium.com/@aviembitel"
        >
          <FaMedium />
        </Link>
      </IconContext.Provider>
    </motion.div>
  );
};

export default IconsContact;
