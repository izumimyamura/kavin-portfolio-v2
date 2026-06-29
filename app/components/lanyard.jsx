"use client";

import { useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { useGLTF, Environment, Lightformer } from '@react-three/drei';
import { Physics, RigidBody, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

function Band() {
  const { scene } = useGLTF('/card.glb');
  
  // Create refs to link the joints
  const fixed = useRef();
  const card = useRef();

  // Create a joint between the fixed point (top) and the card
  useSphericalJoint(fixed, card, [
    [0, 0, 0],  // Connection point on the anchor
    [0, 2, 0]   // Connection point on the card (top edge)
  ]);

  return (
    <>
      {/* 1. The Fixed Anchor (Invisible, holds the card up) */}
      <RigidBody ref={fixed} type="fixed" position={[0, 5, 0]} />
      
      {/* 2. The ID Card (Hangs from the anchor) */}
      <RigidBody 
        ref={card} 
        colliders="cuboid" 
        position={[0, 0, 0]} 
        linearDamping={0.5} 
        angularDamping={0.5}
      >
        <primitive object={scene} />
      </RigidBody>
    </>
  );
}

export default function Lanyard({ gravity = [0, -20, 0] }) {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 20 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
        style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}
