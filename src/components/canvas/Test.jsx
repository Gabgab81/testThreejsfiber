import * as THREE from 'three'
import { AxesHelper, DirectionalLight, PointLightHelper, SpotLightHelper } from 'three';
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas } from "@react-three/fiber"
import { Text3D, MeshReflectorMaterial } from '@react-three/drei';
import fontUrl from "./BlackChancery_Regular.json"

import {Model} from './RobotJustTaping'
import {Model2Animations} from './Test2Animations'
import {Bot3Anim} from './RobotWith3Anim'

import Box from "./Box"
import BoxShader from './BoxShader';
import { useControls } from 'leva';

import { 
    OrbitControls, 
    Preload, 
    SpotLightShadow, 
    useGLTF,
    useFBX, 
    useHelper, 
    SpotLight,
    SoftShadows,
    useAnimations,
    MeshTransmissionMaterial,
    Billboard,
    Sparkles,
    Float,
  } from '@react-three/drei';
  import { LayerMaterial, Depth } from 'lamina'


const Room = () => {
  const  room = useGLTF('./room/scene.gltf')

  const LightSpot = () => {
    const light = useRef()
    // useHelper(light, AxesHelper, 0.5)
    useHelper(light, SpotLightHelper, 'cyan')
    return (
      <SpotLight 
        ref={light} 
        intensity={10} 
        position={[5, 8, 5]} 
        shadow-mapSize-width={2000} 
        shadow-mapSize-height={2000} 
        // castShadow
        // shadow-bias={-0.001}
        shadow-focus={100}
      >
        {/* <SpotLightShadow 
          distance={0.4} // Distance between the shadow caster and light
          alphaTest={0.5} // Sets the alpha value to be used when running an alpha test. See Material.alphaTest
          scale={1} //  Scale of the shadow caster plane
          map={undefined} // Texture - Pattern of the shadow
          shader={undefined} // Optional shader to run. Lets you add effects to the shadow map. See bellow
          width={512} // Width of the shadow map. The higher the more expnsive
          height={512}
        /> */}
      </SpotLight>
    )
  }

  const LightPoint = () => {
    const lightRef = useRef()
    useHelper(lightRef, PointLightHelper, 0.5, 'pink')
    // useHelper(lightRef, AxesHelper, 0.5)
    return <pointLight ref={lightRef} intensity={0.4} position={[-8, 5, 1]}/>
  }

  return (
    <mesh castShadow receiveShadow>
     
      <LightPoint />

      <primitive
        object={room.scene}
        // shadows
        scale={1}
        position={[0, 0, 0]}
      />
      <axesHelper args={[5]} />
    </mesh>
  )
}

const ChatGpt = () => {
  const LightPoint = () => {
    const lightRef = useRef()
    useHelper(lightRef, PointLightHelper, 0.5, 'pink')
    // useHelper(lightRef, AxesHelper, 0.5)
    return <pointLight ref={lightRef} intensity={0.4} position={[-8, 5, 1]}/>
  }
  // const { nodes, animations}= useFBX('./Typing.fbx')
  // const { actions, names } = useAnimations(animations, nodes)
  // // actions[names[0]].play()
  // console.log(actions)
  // console.log(names)
  // console.log(actions[names[0]])
  // // console.log(Object.keys(actions))
  // console.log("animation:", animations)
  const  robot = useGLTF('./RobotJustTaping.glb')
  return (
    <mesh castShadow receiveShadow>
      <LightPoint />

      <primitive
        object={robot.scene}
        // shadows
        scale={100}
        position={[0, 0, 0]}
      />
      <axesHelper args={[5]} />
    </mesh>
  )
}

const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
  // <Billboard>
    <mesh position={[1.5, 0.5, 0]}>
      <boxGeometry args={[3, 2, 2]}  />
      <LayerMaterial
        transparent
        depthWrite={false}
        blending={THREE.CustomBlending}
        blendEquation={THREE.AddEquation}
        blendSrc={THREE.SrcAlphaFactor}
        blendDst={THREE.DstAlphaFactor}>
        <Depth colorA={color} colorB="black" alpha={1} mode="normal" near={near * scale} far={far * scale} origin={[0, 0, 0]} />
        <Depth colorA={color} colorB="black" alpha={0.5} mode="add" near={-40 * scale} far={far * 1.2 * scale} origin={[0, 0, 0]} />
        <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-15 * scale} far={far * 0.7 * scale} origin={[0, 0, 0]} />
        <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-10 * scale} far={far * 0.68 * scale} origin={[0, 0, 0]} />
      </LayerMaterial>
    </mesh>
  // </Billboard>
)

const TestCanvas = () => {

  const { autoRotate, text, shadow, ...config } = useControls({
    text: 'Inter',
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: '#ff9cf5',
    gColor: '#ff7eb3',
    shadow: '#750d57',
    autoRotate: false,
  })

  return (
    <div className="relative h-screen w-full mx-auto">
      <Canvas
        shadows
        camera={{ position: [0, 4, 2], fov: 25 }}
        gl={{ preserveDrawingBuffer: true}}
      >
        <OrbitControls />
        <SoftShadows />
        <directionalLight intensity={1} />
        <ambientLight intensity={1} />
        <Box position={[0, 1, 0]} scale={1}/>
        {/* <BoxShader position={[1, 1, 1]} scale={1}/> */}
        <group>
          <Room />
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >

              <Text3D
              castShadow
              bevelEnabled
              font={fontUrl}
              scale={1}
              letterSpacing={-0.03}
              height={0.25}
              bevelSize={0.01}
              bevelSegments={10}
              curveSegments={128}
              bevelThickness={0.01}
              position={[0, 2, 0]}
            >
              {/* {children} */}
              {/* <MeshTransmissionMaterial {...config} /> */}
              {/* <meshBasicMaterial transparent polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false} /> */}
              <MeshTransmissionMaterial color="#d88441" resolution={128} thickness={0.5} anisotropy={2} temporalDistortion={0.1} distortion={10} envMapIntensity={10} transmission={0.6} />
              <hemisphereLight intensity={0.5} color="white" groundColor="black" />
              <Glow scale={1.2} near={-5} color={"yellow"} />
              {/* <ambientLight intensity={1}/> */}
              Hello
              <Sparkles count={10} scale={2} size={6} speed={0.4} />
          </Text3D>
          </Float>
          
          
          {/* <ChatGpt /> */}
          <Suspense fallback={null} >
            {/* <Model scale={50} position={[0, -2, 0]}/>
            <Model2Animations scale={50} position={[10, -2, 0]}/> */}
            <Bot3Anim />
            <axesHelper args={[5]} />
          </Suspense>
          
        </group>
        

        <Preload />
      </Canvas>
    </div>
  )
}

export default TestCanvas