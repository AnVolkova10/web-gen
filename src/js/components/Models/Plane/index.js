
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Plane = (props) => {
  const ref = useRef()

  return (
    <mesh ref={ref} receiveShadow rotation={[-0.5*Math.PI,0,0]} >
      <planeGeometry args={[50,70,64,64]} />
      <meshStandardMaterial
      color={'gray'}
        depthTest = {true}
        transparent= {true}
        side = {THREE.DoubleSide}
        map = {useLoader(TextureLoader, 'wireframe.png')}
        displacementMap = {useLoader(TextureLoader, 'height.png')}
        displacementScale = {.5}
        alphaMap = {useLoader(TextureLoader, 'alpha.jpg')}
      />
    </mesh>
  );
};
export default Plane;
