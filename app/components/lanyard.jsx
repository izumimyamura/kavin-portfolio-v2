"use client";

import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 20], gravity = [0, -40, 0] }) {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <Canvas camera={{ position: position, fov: 20 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
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
    <group position={[1.5, 4, 0]}> {/* Shifted to the right */}
      <RigidBody ref={fixed} type="fixed" />
      <RigidBody ref={j1} position={[0.5, 0, 0]}><BallCollider args={[0.1]} /></RigidBody>
      <RigidBody ref={j2} position={[1, 0, 0]}><BallCollider args={[0.1]} /></RigidBody>
      <RigidBody ref={j3} position={[1.5, 0, 0]}><BallCollider args={[0.1]} /></RigidBody>
      <RigidBody ref={card} position={[2, 0, 0]}>
        <CuboidCollider args={[0.8, 1.125, 0.01]} />
        <group scale={2.5} position={[0, -1.2, -0.05]}> {/* Scale 2.5 prevents cropping */}
          <mesh geometry={nodes.card.geometry}>
            <meshPhysicalMaterial map={photoTexture} clearcoat={1} roughness={0.3} metalness={0.5} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
