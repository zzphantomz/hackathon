import * as THREE from 'three'
import React, {useRef} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import cloud from "@/Assets/Images/Textures/home-1.png";

function Home1(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, cloud.src, )


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

export default Home1
