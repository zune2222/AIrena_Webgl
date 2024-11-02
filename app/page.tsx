"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PCModel from "./components/PCModel";

const Home: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas style={{ background: "#f0f0f0" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <PCModel />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Home;
