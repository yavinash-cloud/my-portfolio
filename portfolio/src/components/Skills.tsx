import React from "react";
import Image from "next/image";
import "./glow.css";
import "./banner.css";

const Skills = () => {
  const frontendSkills = [
    {
      title: "HTML",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-9294875-7578018.png?f=avif",
    },
    {
      title: "CSS",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png?f=avif",
    },
    {
      title: "JavaScript",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=avif",
    },
    {
      title: "React",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=avif",
    },
    {
      title: "TypeScript",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-9294849-7577992.png?f=avif",
    },
    { title: "Redux", icon: "/skill/redux.1024x971.png" },
    {
      title: "Next.js",
      icon: "https://cdnlogo.com/logos/n/80/next-js.svg",
      // icon: "/skill/next.svg",
    },
    {
      title: "Tailwind CSS",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?f=avif",
    },
    { title: "Webpack", icon: "/skill/webpack.png" },
    {
      title: "ES6",
      icon: "/skill/es6.png",
    },
    {
      title: "Material UI",
      icon: "/skill/mui.png",
    },
    {
      title: "Bootstrap",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-bootstrap-framework-logo-6563486-5453031.png?f=avif",
    },
    { title: "SASS", icon: "https://sass-lang.com/assets/img/logos/logo.svg" },
    {
      title: "Browser Web APIs",
      icon: "/skill/browser_web_api.png",
    },
    { title: "Responsive Layouts", icon: "/skill/Responsive_layouts.png" },
    { title: "Wireframes", icon: "/skill/wireframes.png" },
    { title: "Mockups", icon: "/skill/mockup.png" },
    { title: "Web Security", icon: "/skill/websecurity.png" },
    { title: "Electron.js", icon: "/skill/electronjs.png" },
    { title: "PWA", icon: "/skill/pwa.png" },
  ];

  const backendSkills = [
    {
      title: "Node.js",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=avif",
    },
    {
      title: "Nest.js",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-nestjs-9294862-7578005.png?f=avif",
    },
    { title: "Express.Js", icon: "/skill/express.png" },
    { title: "Microservices", icon: "/skill/microservices.png" },
    { title: "REST API", icon: "/skill/restapi.png" },
    { title: "GraphQL API", icon: "/skill/graphql_logo.png" },
    {
      title: "Working Knowledge of Algorithms and Data Structures",
      icon: "/skill/dsa.png",
    },
  ];

  const miscellaneousSkills = [
    { title: "Jest", icon: "/skill/jest.png" },
    {
      title: "AWS",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-amazon-web-services-8074662-6507782.png?f=avif",
    },
    {
      title: "GIT",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-git-9294878-7578021.png?f=avif",
    },
    {
      title: "GITLAB",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-gitlab-5562373-4642718.png?f=avif",
    },
    {
      title: "GITHUB",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png?f=avif",
    },
    { title: "SEO & Performance Tuning", icon: "/skill/seo.png" },

    {
      title: "Docker",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-docker-5645891-4695749.png?f=avif",
    },
    {
      title: "NPM",
      icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-npm-9294882-7578025.png?f=avif",
    },
    { title: "Accessibility", icon: "/skill/accessibility.png" },
    { title: "Elasticsearch", icon: "/skill/elastic.png" },
    { title: "Kibana", icon: "/skill/kibana.png" },
    { title: "Logstash", icon: "/skill/logstash.png" },
    { title: "Filebeat", icon: "/skill/filebeat.png" },
    {
      title: "Frontend Mentor",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/css-development-6849275-5618453.png?f=avif",
    },
    {
      title: "Mock Interviewer",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/application-development-6849283-5618449.png?f=avif",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 flex justify-center text-flicker-in-glow">
        MY SKILLS
      </h1>
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
                src={skill?.icon}
                alt={`${skill.title} Logo`}
                width={150}
                height={300}
                className="glow hover:scale-110 transition duration-500 cursor-pointer object-cover"
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
                src={skill?.icon}
                alt={`${skill.title} Logo`}
                width={150}
                height={300}
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
                src={skill?.icon}
                alt={`${skill.title} Logo`}
                width={150}
                height={300}
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

export default Skills;
