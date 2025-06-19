"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import "../../components/animate.css";
import "../../components/animate.css";
import "../globals.css";
import { getYearsOfExperience } from "../../utils/helper";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const experienceYears = getYearsOfExperience();
  return (
    <section id="about" className="py-8 lg:py-8">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-20">
          {/* img */}
          {/* <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:flex-none md:flex-none bg-about bg-contain bg-no-repeat h-64 lg:h-96 lg:w-1/3 hidden"
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn3d.iconscout.com/3d/premium/thumb/young-handsome-businessman-sitting-in-office-chair-with-hand-gesture-steeple-5138373-4300837.png"
                  alt="Developer Image"
                  className="lg:-mt-8"
                />
              </motion.div> */}
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
              Full-Stack Developer With {experienceYears}+ Years of Impact
            </motion.h2>
            <h2 className="text-l lg:text-2xl font-bold text-cyan-300 mt-4 text-center p-2">
              Engineering <span className="text-white">Pixel-Perfect</span> Web
              Experiences
            </h2>

            <p className="m-6 text-sm text-cyan-100 glow break-words p-5 backdrop-blur-sm text-center">
              Welcome to my world of web engineering! With over 6 years of
              hands-on experience, I specialize in building elegant, scalable,
              and high-performance web applications. My passion lies in
              transforming complex problems into simple, intuitive interfaces
              that users love. From frontend finesse to backend logic—my work
              merges creativity and technology seamlessly.
            </p>
            <div className="text-green-400 text-xl uppercase mt-4 text-center">
              What Makes Me Different?
            </div>
            <p className="m-6 text-sm text-cyan-100 glow break-words p-5 backdrop-blur-sm text-center">
              I believe in continuous evolution—of both skills and solutions. I
              stay on the cutting edge of modern frameworks, libraries, and best
              practices. Whether it’s optimizing performance, improving
              accessibility, or pushing visual boundaries—I bring a
              detail-driven mindset to every project.
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
