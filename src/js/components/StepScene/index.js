import React, { useState, useEffect, useRef } from 'react'; // Suspense, // useContext,
import { Canvas, useThree } from '@react-three/fiber';
import Scene from '../Scene';
import { Html } from '@react-three/drei';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const StepScene = () => {
  
  return (
    <>
      <div style={{ width: '100%', height: '100vh' }}>
        <Canvas shadows gl={{ alpha: false, antialias: true }} >
          <Scene/>
          {/* <Suspense fallback={null}>
            <directionalLight intensity={0.1} />
            <ambientLight intensity={0.1} />
            <pointLight intensity={2} position={[7, 5, 1]} />
            <Sky sunPosition={[7, 5, 1]} />
            <Camera>
              <Cat />
            </Camera>
            <Plane onClick={() => {}} rotation={[0, 0, 0]} position={[0, 0, 0]} />
            <primitive object={gltf.scene} />
          </Suspense> */}

          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </>
  );
};

export default StepScene;
