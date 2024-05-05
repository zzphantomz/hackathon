import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import tree1 from "@/Assets/Images/Textures/tree-1.png";
import {random} from "nanoid";

function Tree1(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, tree1.src, )
    const group = useRef<THREE.Group>(null!)
    const [speed, setSpeed] = useState(1)
    //
    useEffect(() => {
        if (group.current) {
            group.current.rotation.z = Math.random() * 0.2
        }
    }, [])
    useFrame((state, delta) => {
        if (group.current) {
            if (group.current.rotation.z > 0.2) {
                setSpeed(-1)
            }
            if (group.current.rotation.z < -0.1) {
                setSpeed(1)
            }
            group.current.rotation.z += delta* speed *0.2
        }
    })

    return (
        <>
            <group position={props.position} ref={group} >
            <mesh
                ref={ref}
                position={[-0.3, 1, -1]}
            >
                <planeGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
            </group>
        </>
    )
}

export default Tree1
