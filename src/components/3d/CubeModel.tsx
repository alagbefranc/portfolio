'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

function Cube({ position = [0, 0, 0], color = '#ff8906', wireframe = false, scale = 1, hover = false }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const { scaleSpring } = useSpring({
    scaleSpring: (hovered || hover) ? 1.2 : 1,
    config: { tension: 150, friction: 10 }
  });

  return (
    <animated.mesh
      position={position}
      ref={mesh}
      scale={scaleSpring.to(s => [s * scale, s * scale, s * scale])}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        wireframe={wireframe}
        metalness={0.5}
        roughness={0.2}
      />
      <Edges color="#7f5af0" threshold={15} />
    </animated.mesh>
  );
}

export default function CubeModel({ rotationSpeed = 0.5, interactive = true, size = 300 }) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas dpr={[1, 2]} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#7f5af0" />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        
        {/* Main cube */}
        <Cube position={[0, 0, 0]} color="#ff8906" scale={1} />
        
        {/* Satellite cubes */}
        <Cube position={[1.5, 1.5, 0]} color="#7f5af0" scale={0.4} hover={true} />
        <Cube position={[-1.5, -1.5, 0]} color="#e53170" scale={0.3} hover={true} />
        <Cube position={[-1.2, 1.2, 0]} color="#f25f4c" scale={0.25} hover={true} />
        
        {interactive && <OrbitControls enableZoom={false} rotateSpeed={rotationSpeed} />}
      </Canvas>
    </div>
  );
}
