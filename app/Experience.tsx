"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { AboutJake } from "./AboutJake";
import { TitleSequence } from "./TitleSequence";

export type BreakingStates = "breaking" | "fixing" | "original";

export const Experience = () => {
  const [breakingState, setBreakingState] =
    useState<BreakingStates>("original");

  return (
    <Canvas>
      <color args={["white"]} attach="background" />
      <OrbitControls />
      <ambientLight intensity={7} />

      <TitleSequence
        breakingState={breakingState}
        setBreakingState={setBreakingState}
      />
      <AboutJake
        breakingState={breakingState}
        setBreakingState={setBreakingState}
      />
    </Canvas>
  );
};
