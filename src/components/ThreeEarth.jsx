// src/components/Earth.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);

  const handleClick = () => {
    if (earthRef.current) {
      // Animate the zoom-in effect
      earthRef.current.scale.set(2, 2, 2);
    }
  };

  return (
    <Canvas style={{ height: '100vh' }}>
      {/* Background stars */}
      <Stars radius={300} depth={60} count={2000} factor={7} fade speed={1} />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 0, 5]} intensity={1} />

      {/* Earth */}
      <mesh ref={earthRef} onClick={handleClick}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={new THREE.TextureLoader().load('/earth-texture.jpg')} 
        />
      </mesh>

      {/* Controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Earth;
