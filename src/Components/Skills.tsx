import React from "react";

const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ES6",
    "React",
    "Next.js",
    "Redux",
    "TypeScript",
    "SASS",
    "Browser Web APIs",
    "Responsive Layouts",
    "Wireframes",
    "Mockups",
    "Web Security",
    "Electron.js",
    "PWA",
    "Webpack",
  ];

  const backendSkills = [
    "Node.js",
    "Nest.js",
    "Microservices",
    "Working Knowledge of Algorithms and Data Structures",
    "REST API",
    "GraphQL API",
  ];

  const miscellaneousSkills = [
    "Jest",
    "Accessibility",
    "GIT",
    "SEO & Performance Tuning",
    "AWS",
    "Docker",
    "Elasticsearch",
    "Kibana",
    "Logstash",
    "Filebeat",
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Skills</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Frontend</h2>
        <ul className="list-disc ml-4">
          {frontendSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Backend</h2>
        <ul className="list-disc ml-4">
          {backendSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Miscellaneous</h2>
        <ul className="list-disc ml-4">
          {miscellaneousSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
