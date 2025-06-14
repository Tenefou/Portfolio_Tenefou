/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 TexturePC.gltf --transform 
Files: TexturePC.gltf [45.96KB] > C:\Users\Gaspar\_Projets\repos\WebDev\RIVOIRE--GAIAO_Gaspar\TexturePC-transformed.glb [391.81KB] (-753%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TexturePC-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube002.geometry} material={materials.Screen} position={[0.787, 0.78, -0.008]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.773, 1, 0.046]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Bas} position={[-0.006, -0.011, -0.008]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.773, 1, 0.046]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Keyboard} position={[0.551, 0.027, -0.876]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.045, 0.057, 0.004]} />
    </group>
  )
}

useGLTF.preload('/TexturePC-transformed.glb')
