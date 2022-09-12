import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import React, { Fragment, Suspense, useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';



import Camera from '../Camera/camera';
import Cat from '../Models/Cat';
import Cardbox from '../Models/Cardbox';
import Totem from '../Models/Totem';
import Plane from "../Models/Plane";
import Logo from "../Models/Logo";
import Room from "../Models/Room";

import { PerspectiveCamera } from 'three';

const Scene = () => {
  
  function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    
    const texture = loader.load([
      '/right.png',
      '/left.png',
      '/top.png',
      '/bottom.png',
      '/front.png',
      '/back.png',
  ]);

    scene.background = texture;
    return null;
  }
  
  function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 3);
    return (
      <group position={[0, 10, -1]} rotation={[130, 0, 0]}>
        <cameraHelper args={[camera]} />
      </group>
    );
  }
  

  return (
    <Fragment>
      <Suspense fallback={null}>
        <directionalLight castShadow intensity={0.1} />
        <ambientLight intensity={0.1} /> 
        <pointLight castShadow intensity={2} position={[7, 5, 1]} />
        {/* <spotLight penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow position={[4,2.9,-4.9]}/> */}
        <Camera />
        <axesHelper args={[2, 2, 2]} />
        <SkyBox/>
        <Cat   position={[4, 0.9, -4.9]} rotation={[0,5.5,0]} />
        <Totem scale={[2,2,2]}    position={[-3, 0.912, 3]} rotation ={[0,-3.7,0]}  />
        <Cardbox    position={[-8.8, 0.9, -2.6]} rotation={[0,1.8,0]} />
        <Plane    position={[0, 0, 0]} receiveShadow />
        <Logo  />
        <Room   scale={[5,5,5]}  receiveShadow position={[-3, 0.2, 3]} rotation ={[0,-8.7,0]}/>
        {/* <mesh castShadow position={[2,1.3,-4.9]}>
          <boxGeometry args={[1,1,1]}/>
          <meshBasicMaterial color={'hotpinnk'}/>
        </mesh> */}
        
      </Suspense>

      <OrbitControls />
    </Fragment>
  );
};

export default Scene;
