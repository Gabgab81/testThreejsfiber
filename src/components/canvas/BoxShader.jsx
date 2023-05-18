import { extend, useFrame } from '@react-three/fiber'
import  {shaderMaterial} from "@react-three/drei"
import * as THREE from "three"
import { useRef } from 'react'

import stripesVertex from "./stripes.vertex.glsl"
import stripesFragment from "./stripes.fragment.glsl"

import disksVertex from "./disks.vertex.glsl"
import disksFragment from "./disks.fragment.glsl"

import { useControls } from 'leva'

const StripesShaderMaterial = shaderMaterial(
  { 
    uAlpha: 0.8,
    uMultiplier: 42,
    uColorA: new THREE.Color(0x000000),
    uColorB: new THREE.Color(0x000000),
    uTime: 0,
   },
  // vertex shader
  /*glsl*/
  stripesVertex
  ,
  // fragment shader
  /*glsl*/
  stripesFragment
)

extend({ StripesShaderMaterial })

const DisksShaderMaterial = shaderMaterial(
  { 
    uAlpha: 0.8,
    uMultiplier: 5,
    uColorA: new THREE.Color(0x000000),
    uColorB: new THREE.Color(0x000000),
    uTime: 0,
   },
  // vertex shader
  /*glsl*/
  disksVertex
  ,
  // fragment shader
  /*glsl*/
  disksFragment
)

extend({ DisksShaderMaterial })

const BoxShader = (props) => {

  const { shader } = useControls({
    shader: {
      options: ["none", "disks", "stripes"]
    }
  })

  const stripesControls = useControls("stripes", {
    alpha: {
      min: 0,
      max: 1,
      value: 0.8,
    },
    multiplier: {
      min: 1,
      max: 142,
      value: 42,
    },
    colorA: "#FF0000",
    colorB: "#FFFF00"
  })

  const disksControls = useControls("disks", {
    alpha: {
      min: 0,
      max: 1,
      value: 0.8,
    },
    multiplier: {
      min: 1,
      max: 142,
      value: 5,
    },
    colorA: "#FF0000",
    colorB: "#FFFF00"
  })

  const ref = useRef();

  useFrame((state) =>{
    if (ref.current) {
      ref.current.uTime = state.clock.elapsedTime;
    }
  }) 

  return (
    <mesh {...props}>
      <boxGeometry />
      { shader === 'disks' && (
        <disksShaderMaterial
        ref={ref}
        transparent
        uAlpha={disksControls.alpha}
        uMultiplier={disksControls.multiplier}
        uColorA={disksControls.colorA}
        uColorB={disksControls.colorB}
      />
      )}
      { shader === 'stripes' && (
        <stripesShaderMaterial
        ref={ref}
        transparent
        uAlpha={stripesControls.alpha}
        uMultiplier={stripesControls.multiplier}
        uColorA={stripesControls.colorA}
        uColorB={stripesControls.colorB}
      />
      )}
    </mesh>
  )
}

export default BoxShader