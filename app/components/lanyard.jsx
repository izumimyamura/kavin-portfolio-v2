"use client";

import { useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard() {
  return (
    // Fixed position ensures it stays on screen while content scrolls behind it
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 20 }} gl={{ alpha: true }}>
        <ambientLight intensity={Math.PI} />
        <Physics gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band() {
  const fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const { nodes, materials } = useGLTF('/card.glb');
  const texture = useTexture('/lanyard.png');
  const photoTexture = useTexture('/photo.jpg');
  photoTexture.flipY = false;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  return (
    <group position={[3, 2, 0]}>
      <RigidBody ref={fixed} type="fixed" />
      <RigidBody ref={j1} position={[0.5, 0, 0]}><BallCollider args={[0.1]} /></RigidBody>
      <RigidBody ref={j2} position={[1, 0, 0]}><BallCollider args={[0.1]} /></RigidBody>
      <RigidBody ref={j3} position={[1.5, 0, 0]}><BallCollider args={[0.1]} /></RigidBody>
      
      {/* Set pointerEvents="auto" on the RigidBody to capture mouse drag */}
      <RigidBody ref={card} position={[2, 0, 0]} colliders={false} type="dynamic">
        <CuboidCollider args={[0.8, 1.125, 0.01]} />
        <group 
          scale={3.5} 
          position={[0, -1.2, -0.05]} 
          onPointerOver={() => document.body.style.cursor = 'grab'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <mesh geometry={nodes.card.geometry}>
            <meshPhysicalMaterial map={photoTexture} clearcoat={1} roughness={0.3} metalness={0.5} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
