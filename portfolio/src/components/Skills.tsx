"use client";
import React from "react";
import Image from "next/image";
import "./animate.css";
import "./animate.css";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import {
  frontendSkills,
  backendSkills,
  miscellaneousSkills,
} from "../utils/skills";

const Skills = () => {
  return (
    <div className="container mx-auto py-8">
      <motion.h1
        className="text-4xl mb-8 flex justify-center text-flicker-in-glow text-Rubrik-Distressed"
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        MY SKILLS
      </motion.h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-6 flex justify-center underline">
          Frontend
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg flex flex-col items-center justify-center text-center "
            >
              {" "}
              <Image
                src={`${skill?.icon}`}
                alt={`${skill.title} Logo`}
                width={150}
                height={150}
                loading="lazy"
                className={`glow hover:scale-110 transition duration-500 cursor-pointer object-cover ${
                  skill?.title === "Next.js" ? "bg-slate-500" : ""
                }`}
              />
              <p className="pt-2">{skill?.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-6 flex justify-center underline">
          Backend
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg flex flex-col items-center justify-center text-center"
            >
              {" "}
              <Image
                src={`${skill?.icon}`}
                alt={`${skill.title} Logo`}
                width={150}
                height={150}
                loading="lazy"
                className="glow hover:scale-110 transition duration-500 cursor-pointer object-cover"
              />
              {/* <div className="w-24 h-8 bg-blue-500  mb-2"></div> */}
              {/* Skill Title */}
              <p>{skill?.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-6 flex justify-center underline">
          Miscellaneous
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {miscellaneousSkills.map((skill, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg flex flex-col items-center justify-center text-center"
            >
              <Image
                src={`${skill?.icon}`}
                alt={`${skill.title} Logo`}
                width={150}
                height={150}
                loading="lazy"
                className="glow hover:scale-110 transition duration-500 cursor-pointer object-cover"
              />
              {/* <div className="w-24 h-8 bg-blue-500  mb-2"></div> */}
              {/* Skill Title */}
              <p>{skill?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skills);
