import React from "react"
import { useRef, useEffect } from "react"
import { PerspectiveCamera, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const Camera = ({ position }) => {
  const ref = useRef()

  const scrollY = useScroll()

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={position ? position : [0, 10, -1]}
      rotation={[0, 0, 0]}
      fov={75}
      
    />
  );
};

export default Camera;
