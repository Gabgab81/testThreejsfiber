/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/RobotJustTaping.glb
*/
import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, Decal, RenderTexture, Text, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/public/RobotJustTaping.glb')
  const { actions } = useAnimations(animations, group)

  const skinnedMeshRef = useRef();

  useEffect(() => {
    console.log(actions["Armature|mixamo.com|Layer0"])
    actions["Armature|mixamo.com|Layer0"].play();
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
            
          <group name="Brazo">
            <group>
              <skinnedMesh ref={skinnedMeshRef} name="Brazomesh" geometry={nodes.Brazomesh.geometry} material={materials.blinn3SGmat} skeleton={nodes.Brazomesh.skeleton} />
              {
                skinnedMeshRef.current && (
                  <Decal 
                    mesh={skinnedMeshRef.current}
                    position={[0, 1.3, 0.7]} 
                    rotation={0} scale={1.25}
                  >
                    <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                      <TickerTexture />
                    </meshBasicMaterial>
                  </Decal>
                )
              }
            </group>
            
            <skinnedMesh name="Brazomesh_1" geometry={nodes.Brazomesh_1.geometry} material={materials.lambert3SGmat} skeleton={nodes.Brazomesh_1.skeleton} />
            

            <group>
              <skinnedMesh name="Brazomesh_1" geometry={nodes.Brazomesh_1.geometry} material={materials.lambert3SGmat} skeleton={nodes.Brazomesh_1.skeleton} />
              {
                skinnedMeshRef.current && (
                  <Decal 
                    mesh={skinnedMeshRef.current}
                    position={[0, 1.3, 0.7]} 
                    rotation={0} scale={1.25}
                  >
                    <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                      <TickerTexture />
                    </meshBasicMaterial>
                  </Decal>
                )
              }
            </group>


          </group>
          <group name="Brazo1">

            <group>
              <skinnedMesh name="Brazo1mesh" geometry={nodes.Brazo1mesh.geometry} material={materials.blinn2SGmat} skeleton={nodes.Brazo1mesh.skeleton} />
                {
                  skinnedMeshRef.current && (
                    <Decal 
                      mesh={skinnedMeshRef.current}
                      position={[0, 1.3, 0.7]} 
                      rotation={0} scale={1.25}
                    >
                      <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                        <TickerTexture />
                      </meshBasicMaterial>
                    </Decal>
                  )
                }
              </group>

            
            <skinnedMesh name="Brazo1mesh_1" geometry={nodes.Brazo1mesh_1.geometry} material={materials.blinn3SGmat} skeleton={nodes.Brazo1mesh_1.skeleton} />
            <skinnedMesh name="Brazo1mesh_2" geometry={nodes.Brazo1mesh_2.geometry} material={materials.lambert3SGmat} skeleton={nodes.Brazo1mesh_2.skeleton} />
          </group>
          <group name="Cabeza">

            <group>
              <skinnedMesh name="Cabezamesh" geometry={nodes.Cabezamesh.geometry} material={materials.blinn3SGmat} skeleton={nodes.Cabezamesh.skeleton} />
                {
                  skinnedMeshRef.current && (
                    <Decal 
                      mesh={skinnedMeshRef.current}
                      position={[0, 1.3, 0.7]} 
                      rotation={0} scale={1.25}
                    >
                      <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                        <TickerTexture />
                      </meshBasicMaterial>
                    </Decal>
                  )
                }
              </group>


            <skinnedMesh name="Cabezamesh_1" geometry={nodes.Cabezamesh_1.geometry} material={materials.lambert2SGmat} skeleton={nodes.Cabezamesh_1.skeleton} />
          </group>
          <group name="Cuello">

            <group>
            <skinnedMesh name="Cuellomesh" geometry={nodes.Cuellomesh.geometry} material={materials.initialShadingGroupmat} skeleton={nodes.Cuellomesh.skeleton} />
                {
                  skinnedMeshRef.current && (
                    <Decal 
                      mesh={skinnedMeshRef.current}
                      position={[0, 1.3, 0.7]} 
                      rotation={0} scale={1.25}
                    >
                      <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                        <TickerTexture />
                      </meshBasicMaterial>
                    </Decal>
                  )
                }
              </group>

            <skinnedMesh name="Cuellomesh_1" geometry={nodes.Cuellomesh_1.geometry} material={materials.lambert3SGmat} skeleton={nodes.Cuellomesh_1.skeleton} />
          </group>
          <group name="Cuerpo">

            <group>
              <skinnedMesh name="Cuerpomesh" geometry={nodes.Cuerpomesh.geometry} material={materials.blinn2SGmat} skeleton={nodes.Cuerpomesh.skeleton} />
                {
                  skinnedMeshRef.current && (
                    <Decal 
                      mesh={skinnedMeshRef.current}
                      position={[0, 1.3, 0.7]} 
                      rotation={0} scale={1.25}
                    >
                      <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                        <TickerTexture />
                      </meshBasicMaterial>
                    </Decal>
                  )
                }
            </group>

            <skinnedMesh name="Cuerpomesh_1" geometry={nodes.Cuerpomesh_1.geometry} material={materials.lambert3SGmat} skeleton={nodes.Cuerpomesh_1.skeleton} />
          </group>
          <skinnedMesh name="Dedos1" geometry={nodes.Dedos1.geometry} material={materials.blinn3SGmat} skeleton={nodes.Dedos1.skeleton} />
          <skinnedMesh name="Dedos_Fin" geometry={nodes.Dedos_Fin.geometry} material={materials.blinn3SGmat} skeleton={nodes.Dedos_Fin.skeleton} />
          <skinnedMesh name="Mascara" geometry={nodes.Mascara.geometry} material={materials.initialShadingGroupmat} skeleton={nodes.Mascara.skeleton} />
          <skinnedMesh name="pCube3" geometry={nodes.pCube3.geometry} material={materials.blinn2SGmat} skeleton={nodes.pCube3.skeleton} />
          <skinnedMesh name="pCube6" geometry={nodes.pCube6.geometry} material={materials.blinn3SGmat} skeleton={nodes.pCube6.skeleton} />
          <skinnedMesh name="pCube7" geometry={nodes.pCube7.geometry} material={materials.blinn3SGmat} skeleton={nodes.pCube7.skeleton} />
          <skinnedMesh name="pCylinder6" geometry={nodes.pCylinder6.geometry} material={materials.blinn2SGmat} skeleton={nodes.pCylinder6.skeleton} />
          <skinnedMesh name="pCylinder9" geometry={nodes.pCylinder9.geometry} material={materials.blinn3SGmat} skeleton={nodes.pCylinder9.skeleton} />
          <group name="Pierna">
            <skinnedMesh name="Piernamesh" geometry={nodes.Piernamesh.geometry} material={materials.blinn2SGmat} skeleton={nodes.Piernamesh.skeleton} />
            <skinnedMesh name="Piernamesh_1" geometry={nodes.Piernamesh_1.geometry} material={materials.blinn3SGmat} skeleton={nodes.Piernamesh_1.skeleton} />
            <skinnedMesh name="Piernamesh_2" geometry={nodes.Piernamesh_2.geometry} material={materials.lambert3SGmat} skeleton={nodes.Piernamesh_2.skeleton} />
          </group>
          <group name="Pierna1">
            <skinnedMesh name="Pierna1mesh" geometry={nodes.Pierna1mesh.geometry} material={materials.blinn2SGmat} skeleton={nodes.Pierna1mesh.skeleton} />
            <skinnedMesh name="Pierna1mesh_1" geometry={nodes.Pierna1mesh_1.geometry} material={materials.blinn3SGmat} skeleton={nodes.Pierna1mesh_1.skeleton} />
            <skinnedMesh name="Pierna1mesh_2" geometry={nodes.Pierna1mesh_2.geometry} material={materials.lambert3SGmat} skeleton={nodes.Pierna1mesh_2.skeleton} />
          </group>

          <group>
            <skinnedMesh name="polySurface3" geometry={nodes.polySurface3.geometry} material={materials.blinn2SGmat} skeleton={nodes.polySurface3.skeleton} />
              {
                skinnedMeshRef.current && (
                  <Decal 
                    mesh={skinnedMeshRef.current}
                    position={[0, 1.3, 0.7]} 
                    rotation={0} scale={1.25}
                  >
                    <meshBasicMaterial polygonOffset polygonOffsetFactor={-100} color={[2, 0.5, 10]} side={THREE.DoubleSide} toneMapped={false}>
                      <TickerTexture />
                    </meshBasicMaterial>
                  </Decal>
                )
              }
          </group>
  
        </group>
      </group>
    </group>
  )
}

function TickerTexture() {
  const textRef = useRef()
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      if (++count > 99) count = 0
      textRef.current.text = `${count}%`
      textRef.current.sync()
    }, 100)
    return () => clearInterval(interval)
  })
  return (
    <RenderTexture attach="map" anisotropy={16}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[1.5, 0, 5]} />
      <Text anchorX="right" font="/Inter-Medium.woff" rotation={[0, Math.PI, 0]} ref={textRef} fontSize={1.5} />
    </RenderTexture>
  )
}

useGLTF.preload('/public/RobotJustTaping.glb')
