"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Reflector, Html, Environment } from "@react-three/drei";
import ArcadeMachineModel from "./components/ArcadeMachineModel";

const Home: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        style={{ background: "#f0f0f0" }}
        shadows // 그림자 활성화
      >
        {/* 배경 환경 조명 */}
        <ambientLight intensity={0.3} />

        {/* 메인 광원 */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* 게임기에서 나오는 빛의 반사를 위해 반사율 조정 */}
        <Environment preset="sunset" />

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
          mirror={0.6} // 반사율을 높여 더 명확히 반사
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
