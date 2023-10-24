"use client";

import { useState, useRef, useEffect, Key } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

export default function ImageSlider({ screenshots }: any) {
  const screenshotsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === screenshots.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (screenshotsRef?.current && screenshotsRef?.current?.parentElement)
      screenshotsRef.current.parentElement.style.height = `${screenshotsRef?.current?.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* screenshot image */}
      <div className="relative h-64">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-xl before:-z-10">
          <div className="h-64 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {screenshots.map(
              (screenshot: any, index: Key | null | undefined) => (
                <Transition
                  key={index}
                  show={active === index}
                  className="absolute inset-0 h-full -z-10"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"
                >
                  <Image
                    className="relative top-0 left-1/2 -translate-x-1/2 object-cover rounded-xl"
                    src={`/project${screenshot}`}
                    width={800}
                    height={600}
                    alt={"ss image"}
                    loading="lazy"
                  />
                </Transition>
              )
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex flex-wrap justify-center ">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              active === index
                ? "bg-indigo-500 text-white shadow-indigo-950/10"
                : "bg-white hover:bg-indigo-100 text-slate-900"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{"screenshot"}</span>{" "}
            <span
              className={`${
                active === index ? "text-indigo-200" : "text-slate-300"
              }`}
            >
              -
            </span>{" "}
            <span>{`screenshot role ${index}`}</span>
          </button>
        ))}
      </div> */}
    </div>
  );
}
