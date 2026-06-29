"use client";

import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';

// We use Float to ensure the card stays in view and "hovers" elegantly
function Band({ scale = 0.4 }) {
  const { scene } = useGLTF('/card.glb');
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RigidBody colliders="cuboid" gravityScale={0}>
        <primitive object={scene} scale={scale} />
      </RigidBody>
    </Float>
  );
}

export default function Lanyard() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Soft lighting to ensure the model is visible */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Physics>
          <Band />
        </Physics>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
