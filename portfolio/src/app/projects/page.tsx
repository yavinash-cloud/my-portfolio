"use client";
import Project from "@/components/Project";
import React from "react";
import "../../components/animate.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const page = () => {
  const projectData = [
    {
      index: 1,
      title: "Service Central (Mashreq Bank)",
      description:
        "Developed letter generation modules (Balance Confirmation, No-Liability, Reference Letters) for Mashreq’s customer portal. Automated workflows and improved UX, boosting customer interaction.",
      role: "Frontend Developer",
      technologies: "React, TypeScript, Tailwind CSS, Next.js, API Integration",
      screenshots: ["/mashreq_cp_login.png", "/balanceCertificate_screen.png"],
      demoLink: "https://www.mashreq.com/en/uae/about-us/",
      githubLink: "",
    },
    {
      index: 2,
      title: "Digital Onboarding Platform (Mashreq Bank)",
      description:
        "Contributed to the design and development of a comprehensive onboarding system for business banking users. Built interfaces for modules like document upload, company info, transaction profiling, stakeholder data, FATCA/CRS details, case verification (risk matrix, screening, audit logs), and online banking setup with payment authorization matrix. Ensured data traceability and compliance through structured workflows and enhanced UI.",
      role: "Frontend Developer",
      technologies:
        "React, TypeScript, Tailwind CSS, Redux, Formik, Yup, Next.js",
      screenshots: [
        "/mashreq_cp_login.png",
        "/mashreq_home.png",
        "/nitro_mashreq.png",
      ],
      demoLink: "https://www.mashreq.com/en/uae/about-us/",
      githubLink: "",
    },
    {
      index: 3,
      title: "Admin Tools (Mashreq Bank)",
      description:
        "Developed internal productivity tools from scratch including a Postman-style cURL/bash API testing interface and a SQL Query Playground for debugging and testing queries within the app ecosystem.",
      role: "Full-Stack Developer",
      technologies: "React, TypeScript, Tailwind CSS, SQL, Next.js, Node.js",
      screenshots: ["/mashreq_login.png", "/admin_mashreq.png"],
      demoLink: "https://www.mashreq.com/en/uae/about-us/",
      githubLink: "",
    },
    {
      index: 4,
      title: "ITC E-Store",
      description:
        "Built a mobile-responsive storefront UI using Next.js and GraphQL. Enhanced frontend performance and scalability by integrating a custom BFF layer with NestJS.",
      role: "Full-Stack Developer",
      technologies:
        "Next.js, GraphQL, Tailwind CSS, NestJS, TypeScript, AWS, Docker, Jest",
      screenshots: ["/itc1.png", "/itc2.png", "/itc3.png", "/itc4.png"],
      demoLink: "http://itcstore.in/",
      githubLink: "",
    },
    {
      index: 5,
      title: "XOS Navigation App",
      description:
        "Developed a React + ElectronJS app optimized for Yocto environment. Integrated Google Maps API and local storage to support travel history and offline capabilities.",
      role: "Frontend Developer",
      technologies:
        "React.js, Chakra UI, TypeScript, Electron.js, Google Maps API",
      screenshots: ["/xos1.png", "/xos2.png"],
      demoLink: "https://www.xostrucks.com/",
      githubLink: "",
    },
    {
      index: 6,
      title: "Commonwealth Bank Of Australia - CFS Wrap",
      description:
        "Responsible for enhancing the UI/UX of Commonwealth Bank of Australia's wrap customer's web application using ReactJS, Redux, CSS, and Flex properties.Streamlined application design resulting in improved functionality and an enhanced user experience.",
      role: "Frontend Developer",
      technologies: "React.JS, Material UI,TypeScript, Redux.Js",
      screenshots: ["/cba1.png", "/cba2.png"],
      demoLink: "https://www.commbank.com.au/",
      githubLink: "",
    },
    {
      index: 7,
      title: "Commonwealth Bank Of Australia - CFS Avanteous",
      description:
        "Contributed to the enhancement of the UI/UX of Commonwealth Bank of Australia's Avanteos customer's web application using ReactJS, Redux, CSS, and Flex properties. Implemented changes to improve the application's overall design and usability.",
      role: "Frontend Developer",
      technologies: "React.JS, Material-UI,TypeScript, Redux.Js",
      screenshots: ["/cba3.png", "/cba4.png"],
      demoLink: "https://www.commbank.com.au/investing-and-super.html",
      githubLink: "",
    },
    {
      index: 8,
      title: "PROSHOP",
      description:
        "Full-Stack Ecommerce website Features: Login Page, Sign Up, Logout, Products Page, Checkout Page, User Authentication, Deletion and Updation of products, Total Price in Cart, The Payment Page, The Orders History Page (Real Time Database)",
      role: "Frontend Developer",
      technologies:
        "React.Js, Node.Js,Express.Js, MongoDB, Mongoose, Heroku, Bootstrap, React-Redux ",
      screenshots: [
        "/proshop1.png",
        "/proshop2.png",
        "/proshop3.png",
        "/proshop4.png",
        "/proshop5.png",
      ],
      demoLink: "https://www.proshopdemo.dev/",
      githubLink: "https://github.com/yavinash-cloud",
    },
    {
      index: 9,
      title: "Covid-19 Tracker",
      description:
        "A web application, where users can track covid19 updates.Features: Total number of cases, recoveries and deaths for each country in world .A map showing the data of cases, recoveries and deaths with proper geographical location of each country. ",
      role: "Frontend Developer",
      technologies: "React.JS, Material-UI, react-leaflet",
      screenshots: ["/covidtracker1.png", "/covidtracker2.png"],
      demoLink: "https://trackcovid--19.web.app/",
      githubLink: "https://github.com/yavinash-cloud",
    },
    {
      index: 10,
      title: "Google Clone",
      description:
        "A completely functional Google Search clone made using React.js, Material UI, CSS, and Firebase is a web application that allows users to search for information on the internet, similar to Google Search.",
      role: "Frontend Developer",
      technologies: "REACT.JS, MATERIAL-UI, FIREBASE ETC.",
      screenshots: ["/google1.png"],
      demoLink: "https://clone-f2232.web.app/",
      githubLink: "https://github.com/yavinash-cloud",
    },
    {
      index: 11,
      title: "Pig-Dice-Game",
      description:
        "This is a simple dice roll game made using HTML, CSS, JavaScript, and Bootstrap. It is a two-player game where players take turns rolling dice and trying to score the highest number. The first player to reach 100 points wins the game.This game is a great way to learn about the basics of web development, including HTML, CSS, JavaScript, and Bootstrap. It is also a fun and addictive game to play with friends.",
      role: "Frontend Developer",
      technologies: "HTML5, CSS3, JavaScript",
      screenshots: ["/piggame1.png", "/piggame2.png"],
      demoLink: "https://yavinash-cloud.github.io/Pig-Game.github.io/",
      githubLink: "https://github.com/yavinash-cloud",
    },
    {
      index: 12,
      title: "My Portfolio (Old)",
      description:
        "This portfolio website is a one-page website that showcases my skills and experience in web development. The website is built using HTML, CSS, and vanilla JS.The website features a responsive layout, a navigation bar, a section about me, a section about my skills and experience, and a section with links to my projects.I am most proud of the fact that this website is fully functional and that it is built using only HTML, CSS, and vanilla JS.",
      role: "Developer",
      technologies: "HTML5, CSS3, JAVASCRIPT",
      screenshots: ["/portfolio1.png"],
      demoLink: "https://yavinash-cloud.github.io/My_Portfolio.github.io/",
      githubLink: "https://github.com/yavinash-cloud",
    },
  ];

  return (
    <div className="relative z-10">
      <div className="container mx-auto py-8">
        <motion.h1
          className="text-4xl mb-4 flex justify-center text-flicker-in-glow text-Rubrik-Distressed"
          variants={fadeIn("up", 0.1)}
          initial="show"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Projects
        </motion.h1>
        {projectData.map((data, index) => {
          return <Project key={index} {...data} />;
        })}
      </div>
    </div>
  );
};

export default page;
