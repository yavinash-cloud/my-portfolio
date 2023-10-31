import React from "react";
import "./animate.css";
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
  return (
    <div className="glow flex flex-col items-center justify-center p-4 m-8 backdrop-blur-sm rounded-3xl">
      <h2 className="text-xl font-bold underline mb-2">{props?.title}</h2>
      <div className="bg-none text-center shadow-sm rounded-lg flex-none lg:flex md:flex text-sm lg:text-start lg:p-4 lg:text-base md:text-base">
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

export default React.memo(Project);

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
    <div className="lg:w-1/2 md:w-full lg:ml-4">
      <p className="uppercase lg:text-base md:text-base">{description}</p>

      <div className="mt-4">
        <ul className="list-disc m-4 space-y-4 text-start">
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
    <div className=" lg:w-1/2 md:w-full lg:ml-4 md:ml-0">
      <div className="carousel-container relative lg:overflow-hidden lg:w-full">
        <ImageSlider {...props} />
      </div>
      <div className=" lg:m-0 m-2">
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
    </div>
  );
};
