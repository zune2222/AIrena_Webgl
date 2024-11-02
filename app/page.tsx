"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import ArcadeMachineModel from "./components/ArcadeMachineModel";

const Home: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas style={{ background: "#f0f0f0" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ArcadeMachineModel />
        <OrbitControls minDistance={3} maxDistance={10} />
      </Canvas>
    </div>
  );
};

export default Home;
