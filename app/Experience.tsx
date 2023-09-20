"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { AboutJake } from "./AboutJake";

export const Experience = () => {
  return (
    <Canvas>
      <color args={["white"]} attach="background" />
      <OrbitControls />
      <ambientLight intensity={7} />
      <AboutJake />
    </Canvas>
  );
};
