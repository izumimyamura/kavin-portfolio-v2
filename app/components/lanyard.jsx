
import { useEffect, useRef, useState } from 'react'; 
import { Canvas, extend, useFrame } from '@react-three/fiber'; 
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'; 
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'; 
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'; 
import * as THREE from 'three'; 

extend({ MeshLineGeometry, MeshLineMaterial }); 

// Preload the model to prevent build-time reference errors 
useGLTF.preload('/card.glb'); 

export default function Lanyard({ position = [0, 0, 20], gravity = [0, -40, 0] }) { 
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
