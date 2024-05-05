import * as THREE from 'three'
import React, {useRef} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import character3 from "@/Assets/Images/Textures/character-3.png"

function Character3(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, character3.src, )


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

export default Character3
