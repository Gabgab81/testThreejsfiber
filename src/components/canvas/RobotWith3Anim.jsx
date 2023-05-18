/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/RobotWith3Anim.glb
*/

import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useGLTF, useAnimations, useTexture, Decal, RenderTexture, Text, PerspectiveCamera } from '@react-three/drei'

export function Bot3Anim(props) {
  const texture = useTexture('chatgpt-logo.png')
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/RobotWith3Anim.glb')
  const { actions } = useAnimations(animations, group)

  // Metal

  const metalTextureProps = useTexture({
    map: 'textures/metal/Metal_scratched_008_basecolor.jpg',
    normalMap: 'textures/metal/Metal_scratched_008_normal.jpg',
    roughnessMap: 'textures/metal/Metal_scratched_008_roughness.jpg',
    aoMap: 'textures/metal/Metal_scratched_008_ambientOcclusion.jpg',
  })

  metalTextureProps.map.repeat.set(3, 3);
  metalTextureProps.normalMap.repeat.set(3, 3);
  metalTextureProps.roughnessMap.repeat.set(3, 3);
  metalTextureProps.aoMap.repeat.set(3, 3);

  metalTextureProps.map.wrapS = metalTextureProps.map.wrapT = THREE.RepeatWrapping
  metalTextureProps.normalMap.wrapS = metalTextureProps.normalMap.wrapT = THREE.RepeatWrapping
  metalTextureProps.roughnessMap.wrapS = metalTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping
  metalTextureProps.aoMap.wrapS = metalTextureProps.aoMap.wrapT = THREE.RepeatWrapping

  // Metal

  // Plastic

  const plasticTextureProps = useTexture({
    map: 'textures/plastic/Plastic_003_basecolor.jpg',
    normalMap: 'textures/plastic/Plastic_003_normal.jpg',
    roughnessMap: 'textures/plastic/Plastic_003_roughness.jpg',
    aoMap: 'textures/plastic/Plastic_003_ambientOcclusion.jpg',
  })

  plasticTextureProps.map.repeat.set(3, 3);
  plasticTextureProps.normalMap.repeat.set(3, 3);
  plasticTextureProps.roughnessMap.repeat.set(3, 3);
  plasticTextureProps.aoMap.repeat.set(3, 3);

  plasticTextureProps.map.wrapS = plasticTextureProps.map.wrapT = THREE.RepeatWrapping
  plasticTextureProps.normalMap.wrapS = plasticTextureProps.normalMap.wrapT = THREE.RepeatWrapping
  plasticTextureProps.roughnessMap.wrapS = plasticTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping
  plasticTextureProps.aoMap.wrapS = plasticTextureProps.aoMap.wrapT = THREE.RepeatWrapping
  
  // Plastic

  useEffect(() => {
    console.log("Actions:", actions)
    console.log("Materials:", materials)
    actions["Typing"].play();
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" castShadow>
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          {/* <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} material={materials['Alpha_Joints_MAT.001']} skeleton={nodes.Alpha_Joints.skeleton} /> */}
          <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} skeleton={nodes.Alpha_Joints.skeleton} >
            <meshStandardMaterial {...plasticTextureProps} color={"pink"} />
            {/* <mesh scale={0.1}>
            <boxGeometry />
          </mesh> */}
          </skinnedMesh>
          
          {/* <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} material={materials['Alpha_Body_MAT.001']} skeleton={nodes.Alpha_Surface.skeleton} /> */}
          <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} skeleton={nodes.Alpha_Surface.skeleton}>
            <meshStandardMaterial {...metalTextureProps} />
              {/* <Decal 
                debug
                position={[0, 1.3, 0.1]} 
                // rotation={[0, 0, 0]} 
                scale={0.2} 
                map={texture} 
                map-anisotropy={16}
                // color={'white'}
              ></Decal> */}
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <color attach="background" args={['orange']} />
                <directionalLight position={[10, 10, 5]} />
                <Text fontSize={4} color="#555">
                  Hello ds,fklf, skd, dslfdes ,sdfdk, d, fkdfs ,l
                </Text>
              </RenderTexture>
          </skinnedMesh>
        </group>
        <group name="cs_grp">
          <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.82} />
          <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.82} />
          <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.21} />
          <group name="cs_foot" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_foot001" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_foot002" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_foot_01" position={[0.5, 18.5, 0]} rotation={[0, Math.PI / 2, 0]} scale={2.19} />
          <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.59} />
          <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.82} />
          <group name="cs_hand" position={[0.5, 19.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.21} />
          <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.21} />
          <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
          <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.21} />
          <group name="cs_shoulder_left" position={[0.5, 15.5, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.04} />
          <group name="cs_shoulder_right" position={[0.5, 16.5, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.04} />
          <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.21} />
          <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.21} />
          <group name="cs_square" position={[1.5, 1.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.15} />
          <group name="cs_square_2" position={[0.5, 1.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.15} />
          <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.82} />
          <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.43} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/RobotWith3Anim.glb')


export default Bot3Anim;