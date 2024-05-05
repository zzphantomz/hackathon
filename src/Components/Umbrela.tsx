import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import umbrella from "@/Assets/Images/Textures/umbrella.png";

function Umbrella(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, umbrella.src)
    const group = useRef<THREE.Group>(null!)
    const [speed, setSpeed] = useState(1)
    //
    useEffect(() => {
        if (group.current) {
            group.current.rotation.x = Math.random() * 0.2
        }
    }, [])
    useFrame((state, delta) => {
        if (group.current) {

            group.current.rotation.z += delta
        }
    })

    return (
        <>
            <group position={props.position} ref={group} >
            <mesh
                ref={ref}
                position={[0.5, -0.2, -1]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
            </group>
        </>
    )
}

export default Umbrella
