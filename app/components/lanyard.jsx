'use client';
import { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({
  position = [0, 0, 20],
  gravity = [0, -40, 0],
  lanyardWidth = 0.5 // Default width
}) {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: position, fov: 20 }} gl={{ alpha: true }}>
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band lanyardWidth={lanyardWidth} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ lanyardWidth }) {
  const { nodes, materials } = useGLTF('/card.glb'); // Ensure this is in /public
  const texture = useTexture('/lanyard.png'); // Ensure this is in /public
  
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), dir = new THREE.Vector3();
  const [dragged, drag] = useState(false);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />
        <RigidBody ref={j1} position={[0.5, 0, 0]} colliders={false} />
        <RigidBody ref={j2} position={[1, 0, 0]} colliders={false} />
        <RigidBody ref={j3} position={[1.5, 0, 0]} colliders={false} />
        <RigidBody ref={card} position={[2, 0, 0]} type={dragged ? 'kinematicPosition' : 'dynamic'} colliders="cuboid">
          <mesh 
            geometry={nodes.card.geometry} 
            material={materials.base}
            onPointerDown={(e) => { e.target.setPointerCapture(e.pointerId); drag(new THREE.Vector3().copy(e.point).sub(card.current.translation())) }}
            onPointerUp={(e) => { e.target.releasePointerCapture(e.pointerId); drag(false) }}
          />
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" map={texture} useMap lineWidth={lanyardWidth} resolution={[1024, 1024]} />
      </mesh>
    </>
  );
}
