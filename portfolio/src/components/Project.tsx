import React from "react";
import "./glow.css";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  role: string;
  technologies: string;
  screenshots: string[];
  demoLink: string;
  githubLink: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  // console.log("pppp", props.screenshots);
  return (
    <div className="glow flex flex-col items-center justify-center p-4 m-8">
      <h2 className="text-xl font-bold underline">{props?.title}</h2>
      <div className="bg-none p-8 shadow-sm rounded-lg flex">
        {props.index % 2 != 0 ? (
          <>
            <LeftContainer {...props} />
            <RightContainer {...props} />
          </>
        ) : (
          <>
            <RightContainer {...props} />
            <LeftContainer {...props} />
          </>
        )}
      </div>
    </div>
  );
};

export default Project;

const LeftContainer: React.FC<ProjectProps> = ({
  title,
  description,
  role,
  technologies,
  screenshots,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="flex-1">
      <p className="uppercase">{description}</p>

      <div className="mt-4">
        <ul className="list-disc m-4 space-y-4">
          <li>
            <strong>Role:</strong> {role}
          </li>
          <li>
            <strong>Technologies Used:</strong> {technologies}
          </li>

          {githubLink ? (
            <li>
              <strong>GitHub Repository:</strong>{" "}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <span>CLICK HERE</span>
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

const RightContainer: React.FC<ProjectProps> = (props) => {
  return (
    <div className=" flex-1 p-4">
      <div className="carousel-container relative overflow-hidden w-full">
        <ImageSlider {...props} />
      </div>
      <strong>Link to live demo:</strong>{" "}
      <Link
        href={props?.demoLink}
        prefetch={true}
        rel="noopener noreferrer"
        target="_blank"
        className="underline pl-4"
      >
        <span> Click Here </span>
      </Link>
    </div>
  );
};
