"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="" ref={ref}>
      <div className="container mx-auto relative z-10">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen "
        >
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-none bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <img src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 pr-24"
          >
            <h2 className="text-4xl font-bold mb-4 text-violet-300">
              Experienced Full-Stack Developer
              <br />
              Crafting Pixel-Perfect Websites for Over 4 Years
            </h2>

            <p className="mb-6 text-lg leading-loose  text-cyan-100">
              Welcome to my world of web development, where I bring ideas to
              life with a keen eye for detail. With 4+ years of hands-on
              experience, I've mastered the art of creating pixel-perfect
              websites that not only look stunning but also deliver exceptional
              user experiences. My expertise spans UI and UX design, web
              standards, responsive layouts, accessibility, performance
              optimization, and the latest technologies in the field. I thrive
              in Agile/Scrum environments and am fluent in modern web libraries,
              frameworks, and tools.
              <div className="text-green-400"> What sets me apart?</div>
              <div>
                My unwavering commitment to staying at the forefront of the
                ever-evolving tech landscape. Over the years, I've devoted
                myself to learning and staying updated with emerging trends and
                technologies. My passion for web development continues to drive
                me forward, ensuring that every project I undertake is a
                masterpiece.
              </div>
            </p>

            {/* stats */}
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
