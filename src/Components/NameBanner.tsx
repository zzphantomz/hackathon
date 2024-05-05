import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import name from "@/Assets/Images/Textures/name.png";

function NameBanner(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const texture = useLoader(THREE.TextureLoader, name.src )


    return (
        <>
            <mesh
                {...props}
                ref={ref}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}
                scale={[4, 2,0]}
            >
                <planeGeometry attach="geometry" args={[1,1]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>

        </>
    )
}

export default NameBanner
