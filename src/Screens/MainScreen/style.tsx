import dailyImage from "@/Assets/Images/Textures/daily.png";
import bagImage from "@/Assets/Images/Textures/bag.png";
import boxDialog from "@/Assets/Images/Textures/box-dialog.png";
import map from "@/Assets/Images/Map/Map.png";
const style = {
    modalStyle: {
        zIndex: 1000,
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        height: 500,
        backgroundImage: `url(${boxDialog.src})`,
        backgroundSize: 'cover',
        border: 'none',
        p: 4,
        outline: 0,
    },
    modalMapStyle: {
        zIndex: 1000,
        position: 'absolute' as 'absolute',
        width: 1000,
        height: 690,
        top: '10%',
        left: '20%',
        borderRadius: 10,
        backgroundImage: `url(${map.src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        border: 'none',
        p: 4,
        outline: 0,
    },
    buttonClose: {
        position: 'absolute' as 'absolute',
        top: 0,
        right: 0,
        color: 'primary',
    },
    dailyContainer: {
        backgroundImage: `url(${dailyImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 100,
        width:100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    },
    bagContainer: {
        backgroundImage: `url(${bagImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 100,
        width:100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    },
    closeButton: {
        backgroundColor: "#F7839D",
        color: "#fff",
        border: "5px solid #FFC4C4",
        fontSize: 20,
        fontWeight: "bold",

        padding: 2,
        borderRadius: 4,
        height: 50,
        width: 100
    }
}

export default style
