// app/page.tsx
"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Reflector, Environment } from "@react-three/drei";
import ArcadeMachineModel from "./components/ArcadeMachineModel";

const Home: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      {/* Three.js Canvas */}
      <Canvas
        style={{ background: "#000000" }} // 배경을 어두운 색으로 설정
        shadows // 그림자 활성화
      >
        {/* 어두운 환경 조명 */}
        <ambientLight intensity={0.05} />

        {/* 약한 태양광 */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.3} // 밝기를 더 낮춰서 밤 분위기 조성
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* 밤하늘 배경 */}
        <Environment preset="night" />

        {/* 아케이드 게임기 */}
        <ArcadeMachineModel />

        {/* 반사 및 그림자 바닥 */}
        <Reflector
          blur={[400, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={0.5}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          args={[20, 20]}
          mirror={0.6}
        >
          {(Material, props) => (
            <Material
              metalness={0.1}
              roughness={0.8}
              color="#ffffff"
              {...props}
            />
          )}
        </Reflector>

        <OrbitControls minDistance={5} maxDistance={20} />
      </Canvas>
    </div>
  );
};

export default Home;
