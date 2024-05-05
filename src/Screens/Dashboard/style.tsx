import button from "@/Assets/Images/Textures/button.png";
import dialogBackground from "@/Assets/Images/Textures/box-dialog.png";
const style = {
    modalStyle: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: 'background.paper',
        border: '2px solid #F1E9DB',
        boxShadow: 24,
        p: 4,
    },
    buttonClose: {
        position: 'absolute' as 'absolute',
        top: 0,
        right: 0,
        color: 'primary',
    },
    paperContainer: {
        backgroundImage: `url(${button.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 60,
        width:350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    },
    dialogContainer: {},
    dialogStyle: {
        backgroundImage: `url(${dialogBackground.src})`,
        backgroundSize: 'cover',
    }
}

export default style
