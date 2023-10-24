"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import "../../components/animate.css";
import "../../components/animate.css";
import "../globals.css";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="py-8 lg:py-8">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-20">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex-none md:flex-none bg-about bg-contain bg-no-repeat h-64 lg:h-96 lg:w-1/3 hidden"
          >
            <img
              loading="lazy"
              srcSet="https://cdn3d.iconscout.com/3d/premium/thumb/young-handsome-businessman-sitting-in-office-chair-with-hand-gesture-steeple-5138373-4300837.png?f=avif"
              alt="Developer Image"
              className="lg:-mt-8"
            />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 pb-6 uppercase lg:w-2/3 lg:ml-10"
          >
            <motion.h2
              className="text-2xl lg:text-4xl text-purple-300 text-Rubrik-Distressed text-center"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Experienced Full-Stack Developer
            </motion.h2>
            <h2 className="text-l lg:text-2xl font-bold text-cyan-300 mt-4 text-center p-2">
              Crafting <span className="text-white">Pixel-Perfect</span>{" "}
              Websites for Over 4 Years
            </h2>

            <p className="m-6 text-sm text-cyan-100 glow break-words p-5 backdrop-blur-sm text-center">
              Welcome to my world of web development, where I bring ideas to
              life with a keen eye for detail. With 4+ years of hands-on
              experience, I've mastered the art of creating pixel-perfect
              websites that not only look stunning but also deliver exceptional
              user experiences. My expertise spans UI and UX design, web
              standards, responsive layouts, accessibility, performance
              optimization, and the latest technologies in the field. I thrive
              in Agile/Scrum environments and am fluent in modern web libraries,
              frameworks, and tools.
            </p>
            <div className="text-green-400 text-xl uppercase mt-4 text-center">
              What sets me apart?
            </div>
            <p className="m-6 text-sm text-cyan-100 glow break-words p-5 backdrop-blur-sm text-center">
              My unwavering commitment to staying at the forefront of the
              ever-evolving tech landscape. Over the years, I've devoted myself
              to learning and staying updated with emerging trends and
              technologies. My passion for web development continues to drive me
              forward, ensuring that every project I undertake is a masterpiece.
            </p>
          </motion.div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
