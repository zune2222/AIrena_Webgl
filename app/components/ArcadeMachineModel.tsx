// components/ArcadeMachineModel.tsx
import React, { useRef, useEffect } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { Mesh, TextureLoader, RectAreaLight, RectAreaLightHelper } from "three";
import { Edges } from "@react-three/drei";

extend({ RectAreaLight });

const ArcadeMachineModel: React.FC = () => {
  const screenRef = useRef<Mesh>(null);
  const rectLightRef = useRef<RectAreaLight>(null);

  // 화면에 이미지 텍스처 로드
  const screenTexture = useLoader(TextureLoader, "/test.png"); // 이미지 경로를 여기에 넣으세요

  useEffect(() => {
    if (rectLightRef.current) {
      // RectAreaLight가 스크린을 향하도록 설정
      rectLightRef.current.lookAt(0, 1.5, 0);
    }
  }, []);

  return (
    <group position={[0, -1, 0]}>
      {/* 게임기 본체 */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#2a2a2a" />
        <Edges scale={1} color="white" />
      </mesh>

      {/* 스크린 */}
      <mesh ref={screenRef} position={[0, 1.5, 0.51]} receiveShadow>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial map={screenTexture} /> {/* 텍스처 추가 */}
      </mesh>

      {/* RectAreaLight를 사용하여 스크린 전체에서 빛이 나오도록 설정 */}
      <rectAreaLight
        ref={rectLightRef}
        width={1.5} // 스크린 크기와 동일하게 설정
        height={1} // 스크린 크기와 동일하게 설정
        position={[0, 1.05, 0.6]} // 스크린 바로 앞 위치
        intensity={2} // 빛의 밝기
        color="white" // 스크린과 유사한 색상
      />

      {/* 조작 패널 */}
      <mesh position={[0, 0.5, 0.45]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[1.8, 0.5, 0.1]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>

      {/* 조이스틱과 버튼들 */}
      <mesh position={[-0.6, 0.6, 0.6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[-0.6, 0.8, 0.6]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0.2, 0.6, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0.5, 0.6, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* 가로등 기둥 */}
      <mesh position={[2, 1.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4.8, 42]} />
        <meshStandardMaterial color="#888888" />
      </mesh>

      {/* 가로등 램프 */}
      <mesh position={[2, 4, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial emissive="#ffffcc" emissiveIntensity={1.2} />
      </mesh>

      {/* 가로등 빛 (위에서 아래로 비추도록 설정) */}
      <spotLight
        position={[2, 4, 0]} // 램프 위치와 동일하게 설정
        angle={Math.PI / 4} // 빛의 각도 설정
        penumbra={0.5}
        intensity={30} // 밝기 조정
        distance={15} // 빛의 범위 확장
        color="yellow"
        castShadow
        target-position={[0, 0, 0]} // 아래쪽을 향하도록 타겟 설정
      />
    </group>
  );
};

export default ArcadeMachineModel;
