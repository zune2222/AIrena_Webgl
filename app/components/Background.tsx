// components/Background.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const Background: React.FC = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-screen z-[-1]">
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <meshStandardMaterial attach="material" color="#1e90ff" />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Background;
