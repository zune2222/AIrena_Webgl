// components/ArcadeMachineModel.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Color } from "three";
import { Html, Edges } from "@react-three/drei";

const ArcadeMachineModel: React.FC = () => {
  const screenRef = useRef<Mesh>(null);

  // 화면에 약간의 움직임 추가
  useFrame(() => {
    if (screenRef.current) {
      screenRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.02;
    }
  });

  return (
    <group position={[0, -1.5, 0]}>
      {" "}
      {/* 바닥과 맞닿도록 위치 조정 */}
      {/* 게임기 본체 */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#2a2a2a" />
        <Edges scale={1.05} color="#00ffff" /> {/* 네온 테두리 효과 */}
      </mesh>
      {/* 스크린 */}
      <mesh ref={screenRef} position={[0, 2, -0.45]} receiveShadow>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="black" />
        <Html position={[0, 0, 0]}>
          <div
            style={{
              width: "150px",
              height: "100px",
              backgroundColor: "black",
              color: "cyan",
              fontSize: "20px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CREDITS
          </div>
        </Html>
      </mesh>
      {/* 조작 패널 */}
      <mesh position={[0, 0.5, 0.45]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[1.8, 0.5, 0.1]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      {/* 조이스틱 */}
      <mesh position={[-0.6, 0.6, 0.6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[-0.6, 0.8, 0.6]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* 버튼들 */}
      <mesh position={[0.2, 0.6, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0.5, 0.6, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
      {/* 스티커 */}
      <mesh position={[-1.1, 1, 0]}>
        <planeGeometry args={[0.5, 1.5]} />
        <meshStandardMaterial color="yellow" />
        <Edges scale={1.01} color="#00ff00" />
      </mesh>
    </group>
  );
};

export default ArcadeMachineModel;
