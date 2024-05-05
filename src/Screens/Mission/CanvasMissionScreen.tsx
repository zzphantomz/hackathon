import {Canvas, ThreeElements} from "@react-three/fiber";
import Cloud from "@/Components/Cloud";
import NameBanner from "@/Components/NameBanner";
import Land1 from "@/Components/Land1";
import Character from "@/Components/Character";
import Snow from "@/Components/Snow";
import Land from "@/Components/Land";
import Table from "@/Components/Table";


const CanvasMainScreen = (props: ThreeElements['mesh']) => {

    return (
        <Canvas>
            <Land position={[0, -3, 0]} />
            <Table position={[0, -2, 0]} />
        </Canvas>
    )
}

export default CanvasMainScreen
