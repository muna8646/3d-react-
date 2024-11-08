import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Box() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClick(!clicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}