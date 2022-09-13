
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, PivotControls, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';


const Cat = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/cat/scene.gltf');
  const { actions } = useAnimations(animations, group);
  
  const scrollY = useScroll()
  // const [position, setPosition] = useState({ x: 0, y: 0.85, z: -5 })
  // const [positionScroll, setPositionScroll] = useState(0)


 
  
  useFrame(({ clock }) => {
    const frame = clock.getElapsedTime();
    actions?.A_idle.play(); 
    if (frame > 5) {
      actions?.A_walk.play();
    }
    if(frame>6){
      actions?.A_idle.stop();
    }
  });

  // if (group.current && start === true) {
  //   if (scrollY.visible(2 / 4, 0.49)) {
  //     actions?.A_walk.play()
  //     group.current.position.z = -5 + scrollY.range(2 / 4, 2 / 4) * 7
  //     group.current.position.x = scrollY.range(2 / 4, 2 / 4) * 2
  //   } else {
  //     actions?.A_walk.stop()
  //   }
  // }


  return (
    <PivotControls axisColors={["red", "green", "blue"]}>
      <group ref={group} {...props} dispose={null}>
        <group name='Sketchfab_Scene'>
          <group
            name='Sketchfab_model'
            rotation={[-Math.PI / 2, 0, 0]}
            scale={860.73}
          >
            <group
              name='153a0d5dcc9149cfb9856363b51a1918fbx'
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name='Object_2'>
                <group name='RootNode'>
                  <group name='Object_4'>
                    <primitive object={nodes._rootJoint} />
                    <group
                      name='Object_6'
                      position={[-0.01, -0.1, 0.22]}
                      scale={1.3}
                    />
                    <skinnedMesh
                      castShadow
                      name='Object_7'
                      geometry={nodes.Object_7.geometry}
                      material={materials.cu_cat2_mt}
                      skeleton={nodes.Object_7.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </PivotControls>
  );
};

useGLTF.preload('/models/cat/scene.gltf');

export default Cat;
