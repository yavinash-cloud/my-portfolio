"use client";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

const ParticlesContainer = () => {
  const particlesInit = async (engine: Engine) => {
    console.log(engine);
    await loadFirePreset(engine);
  };

  return (
    <div id="particles-js" className="-z-1">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "fire",
        }}
      />
    </div>
  );
};

export default ParticlesContainer;
