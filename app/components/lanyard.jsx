"use client";

import { useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { useGLTF, Environment, Lightformer } from '@react-three/drei';
import { Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

function Band({ scale = 0.6 }) {
  const { scene } = useGLTF('/card.glb');
  
  return (
    <group scale={scale}>
      <RigidBody>
        <primitive object={scene} />
      </RigidBody>
    </group>
  );
}

export default function Lanyard({ position = [0, 0, 20], gravity = [0, -20, 0] }) {
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
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} scale={[100, 0.1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}
