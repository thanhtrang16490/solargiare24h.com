import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Floating solar panel component
function FloatingSolarPanel() {
  const panelRef = useRef<THREE.Group>(null);
  const panelRef2 = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      panelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (panelRef2.current) {
      panelRef2.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      panelRef2.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <>
      {/* Main Solar Panel */}
      <group ref={panelRef} position={[2, 0, 0]} rotation={[0.3, 0, 0]}>
        {/* Panel frame */}
        <Box args={[2.4, 1.6, 0.08]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1e3a5f" />
        </Box>
        {/* Panel cells grid */}
        {[-0.8, 0, 0.8].map((x, xi) =>
          [-0.5, 0.5].map((y, yi) => (
            <Box key={`${xi}-${yi}`} args={[0.7, 0.65, 0.05]} position={[x, y, 0.05]}>
              <meshStandardMaterial color="#1a56db" metalness={0.6} roughness={0.2} />
            </Box>
          ))
        )}
        {/* Mount pole */}
        <Cylinder args={[0.06, 0.06, 1.2, 8]} position={[0, -1.2, 0]}>
          <meshStandardMaterial color="#6b7280" />
        </Cylinder>
        {/* Base */}
        <Box args={[0.8, 0.1, 0.4]} position={[0, -1.85, 0]}>
          <meshStandardMaterial color="#4b5563" />
        </Box>
      </group>

      {/* Secondary Solar Panel */}
      <group ref={panelRef2} position={[-2.5, 0, 1]} scale={0.8} rotation={[0.3, 0, 0]}>
        {/* Panel frame */}
        <Box args={[2.4, 1.6, 0.08]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#064e3b" />
        </Box>
        {/* Panel cells */}
        {[-0.8, 0, 0.8].map((x, xi) =>
          [-0.5, 0.5].map((y, yi) => (
            <Box key={`${xi}-${yi}`} args={[0.7, 0.65, 0.05]} position={[x, y, 0.05]}>
              <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.2} />
            </Box>
          ))
        )}
        {/* Mount pole */}
        <Cylinder args={[0.06, 0.06, 1.2, 8]} position={[0, -1.2, 0]}>
          <meshStandardMaterial color="#6b7280" />
        </Cylinder>
        {/* Base */}
        <Box args={[0.8, 0.1, 0.4]} position={[0, -1.85, 0]}>
          <meshStandardMaterial color="#4b5563" />
        </Box>
      </group>
    </>
  );
}

// Floating particles
function FloatingParticles() {
  const particleCount = 50;
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />

      {/* Main content */}
      <FloatingSolarPanel />
      <FloatingParticles />
      
      {/* Subtle orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Main component
export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
} 