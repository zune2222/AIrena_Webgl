// components/ArcadeMachineModel.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Html } from "@react-three/drei";

const ArcadeMachineModel: React.FC = () => {
  const screenRef = useRef<Mesh>(null);

  // 화면에 입체감을 더 주기 위해 조명을 추가
  useFrame(() => {
    if (screenRef.current) {
      screenRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.02; // 화면에 약간의 움직임 추가
    }
  });

  return (
    <group>
      {/* 게임기 본체 */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 3, 1]} /> {/* 본체 */}
        <meshStandardMaterial color="#2a2a2a" /> {/* 짙은 회색 본체 색상 */}
      </mesh>

      {/* 스크린 */}
      <mesh ref={screenRef} position={[0, 2, -0.45]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* 조작 패널 */}
      <mesh position={[0, 0.5, 0.45]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[1.8, 0.5, 0.1]} /> {/* 패널 부분 */}
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

      {/* 버튼 */}
      <mesh position={[0.2, 0.6, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0.5, 0.6, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* 동전 투입구 */}
      <mesh position={[-0.7, 1.1, 0.45]}>
        <boxGeometry args={[0.2, 0.1, 0.02]} /> {/* 투입구 */}
        <meshStandardMaterial color="#808080" /> {/* 은색 투입구 */}
      </mesh>

      {/* 화면에 표시될 iframe */}
      <Html position={[0, 2, -0.46]}>
        <iframe
          src="https://www.naver.com" // 여기에 표시할 웹사이트 URL을 넣으세요
          style={{ width: "100%", height: "100%", border: "none" }}
          width="300"
          height="200"
        />
      </Html>
    </group>
  );
};

export default ArcadeMachineModel;
