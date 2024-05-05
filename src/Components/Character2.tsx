import * as THREE from 'three'
import React, {useRef} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import character2 from "@/Assets/Images/Textures/character-2.png";

function Character2(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, character2.src, )


    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={[2, 2, 0]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Character2
