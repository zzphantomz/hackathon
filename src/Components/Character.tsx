import * as THREE from 'three'
import React, {useRef} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import character from "@/Assets/Images/Textures/character.png";

function Character(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, character.src, )


    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={[3, 3.5, 2]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Character
