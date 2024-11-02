// components/PCModel.tsx
import React from "react";

const PCModel: React.FC = () => {
  return (
    <group>
      {/* 모니터 본체 */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2.5, 1.8, 0.1]} /> {/* 얇은 모니터 두께 */}
        <meshStandardMaterial color="lightblue" />{" "}
        {/* 옛날 아이맥 느낌의 색상 */}
      </mesh>

      {/* 모니터 화면 */}
      <mesh position={[0, 1, -0.06]}>
        <boxGeometry args={[2.3, 1.6, 0.02]} /> {/* 화면 부분 */}
        <meshStandardMaterial color="black" /> {/* 검정색 화면 */}
      </mesh>

      {/* 로고 영역 하단 부분 */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.5, 0.3, 0.1]} /> {/* 화면 하단 로고 영역 */}
        <meshStandardMaterial color="lightblue" />
      </mesh>

      {/* 받침대 */}
      <mesh position={[0, -0.3, 0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 32]} /> {/* 세로 막대 */}
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* 받침대 하단 베이스 */}
      <mesh position={[0, -1, 0.5]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} /> {/* 원형 베이스 */}
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
};

export default PCModel;
