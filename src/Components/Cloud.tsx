
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {Canvas, ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import cloud from "@/Assets/Images/Textures/cloud-1.png";
import img1 from "@/Assets/Images/Textures/land.png";

function Cloud(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, cloud.src, )


    useFrame((state, delta) => {
        if (ref.current) {
            if (ref.current.position.x > 8) {
                ref.current.position.x = -8
            }
            else {
                ref.current.position.x += delta* Math.random()
            }
        }
    })
    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={[2, 2, 2]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Cloud
