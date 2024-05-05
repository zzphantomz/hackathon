import * as THREE from 'three'
import React, {useRef} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import character4 from "@/Assets/Images/Textures/character-4.png"

function Character4(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, character4.src, )


    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={[1, 1, 1]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Character4
