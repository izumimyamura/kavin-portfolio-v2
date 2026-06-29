"use client";

import { useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { useGLTF, Environment, Lightformer } from '@react-three/drei';
import { Physics, RigidBody, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

useGLTF.preload('/card.glb');

function Band({ scale = 0.5 }) {
  const { scene } = useGLTF('/card.glb');
  
  // Refs for physics connection
  const fixed = useRef();
  const card = useRef();

  // Create a joint between an invisible anchor and the card
  // This allows the card to swing naturally
  useSphericalJoint(fixed, card, [
    [0, 1.5, 0],  // Anchor point (slightly above the card)
    [0, 0, 0]     // Connection point on the card
  ]);

  return (
    <group scale={scale}>
      {/* Invisible fixed point that holds the lanyard */}
      <RigidBody ref={fixed} type="fixed" position={[0, 5, 0]} />
      
      {/* The actual ID Card */}
      <RigidBody 
        ref={card} 
        position={[0, 0, 0]} 
        colliders="cuboid" 
        linearDamping={0.5} 
        angularDamping={0.5}
      >
        <primitive object={scene} />
      </RigidBody>
    </group>
  );
}

export default function Lanyard({ position = [0, 0, 15], gravity = [0, -20, 0] }) {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: position, fov: 20 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
        style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}
