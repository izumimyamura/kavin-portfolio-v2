"use client";

import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Lightformer } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';

function Band({ scale = 0.6 }) {
  // Ensure the path to your model is correct
  const { scene } = useGLTF('/card.glb');
  
  return (
    <group scale={scale}>
      {/* Positioned at [0, 0, 0] to be centered in the Canvas */}
      <RigidBody position={[0, 0, 0]} colliders="cuboid">
        <primitive object={scene} />
      </RigidBody>
    </group>
  );
}

export default function Lanyard() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }} // Pulled back camera for better visibility
        style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <Physics gravity={[0, 0, 0]}> {/* Gravity 0 keeps it floating in center */}
          <Band />
        </Physics>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
