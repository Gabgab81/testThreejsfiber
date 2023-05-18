import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { Decal, PivotControls, RenderTexture, PerspectiveCamera, Text, useTexture, MeshReflectorMaterial } from '@react-three/drei'

const Box = (props) => {
  const texture = useTexture('chatgpt-logo.png')

  return (
    // <PivotControls>
      <mesh {...props} >
      <boxGeometry args={ [1, 1, 1]} />
      <meshStandardMaterial color={'white'}>
        <RenderTexture attach="map" anisotropy={16}>
          {/* <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} /> */}
          <color attach="background" args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text fontSize={4} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
      {/* <Text debug color="black" position={[0, 0, 0]}>
        hello world!
      </Text> */}
      {/* <Decal 
        debug
        position={[0, 0, 2]} 
        rotation={[0, 0, 0]} 
        scale={2} 
        map={texture} 
        map-anisotropy={16}
        color={'white'} 
        />
        <Decal>
          <Text debug color="black" position={[0, 0, -2.1]} scale={1.2} >
            hello world!
          </Text>
        </Decal> */}
        {/* <MeshReflectorMaterial 
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        /> */}
    </mesh>
    // </PivotControls>
    
  )
}

export default Box