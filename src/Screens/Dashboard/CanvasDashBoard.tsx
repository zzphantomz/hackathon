import {Canvas, ThreeElements} from "@react-three/fiber";
import Cloud from "@/Components/Cloud";
import NameBanner from "@/Components/NameBanner";
import Character from "@/Components/Character";
import Land1 from "@/Components/Land1";
import Snow from "@/Components/Snow";


const CanvasDashBoard = (props: ThreeElements['mesh']) => {

    return (
        <Canvas>
            <Snow position={[-5, 3, 0]} speed={1}  />
            <Snow position={[-2, 5, 0]} speed={1}  />
            <Snow position={[0, 3, 0]} speed={1}  />
            <Snow position={[2, 1, 0]} speed={1}  />
            <Snow position={[2, 6, 0]} speed={1}  />

            <Character position={[0, -1, 0]} />
            {/*<Umbrella position={[1, -1, 0]} />*/}
            {/*<Character2 position={[0, -3, 0]} />*/}
            <NameBanner position={[0,1.5,0]} />
            <Land1 position={[0, -3, 0]} />
        </Canvas>
    )
}

export default CanvasDashBoard
