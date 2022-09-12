import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';

const Camera = ({ position }) => {
  return (
    <PerspectiveCamera
      makeDefault
      position={position ? position : [0, 10, -1]}
      rotation={[0, 0, 0]}
      fov={75}
    />
  );
};

export default Camera;
