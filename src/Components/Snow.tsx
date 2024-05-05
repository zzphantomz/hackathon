
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {Canvas, ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import snow from "@/Assets/Images/Textures/snow.png";

function Snow(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, snow.src)


    useFrame((state, delta) => {
        if (ref.current) {
            if (ref.current.position.y < -3) {
                ref.current.position.y = 3
            }
            else {
                ref.current.position.y -= delta* Math.random()
            }
        }
    })
    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={[5, 3, 0]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Snow
