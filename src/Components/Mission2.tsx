import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import {ThreeElements, useFrame, useLoader} from '@react-three/fiber'
import mission from "@/Assets/Images/Mission/mission-2.png";

function Mission1(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader, mission.src )
    const [hovered, hover] = useState(false)
    const onClickMission = () => {
        props?.router.push('/mission')
    }

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={hovered ? 1.5 : 1}
                onClick={onClickMission}

                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}>
                <planeGeometry attach="geometry" args={[2, 2]} />
                l
                <meshBasicMaterial attach="material" toneMapped={true} map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Mission1
