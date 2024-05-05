import awardLine from "@/Assets/Images/Textures/award-line.png";
import incomplete from "@/Assets/Images/Textures/incomplete.png";
import completed from "@/Assets/Images/Textures/completed.png";
const style = {
    completeBackground: {
        backgroundImage: `url(${awardLine.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 80,
        width:790,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        padding: 2,
        position: "relative",
    },
    inCompleteBackground: {
        backgroundImage: `url(${incomplete.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 80,
        width:790,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        padding: 2,
        position: "relative",

    },    completedBackground: {
        backgroundImage: `url(${completed.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 80,
        width:790,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        padding: 2,
        position: "relative",

    },
    awardText: {
        color: "#6e5532 !important",
        fontWeight: "bold",
        fontSize: 15,
        position: "absolute",
        left: 35,
        top: 50,
    },
    descriptionText: {
        color: "#6e5532 !important",
        fontWeight: "bold",
        width: 500,
        fontSize: 12,

    }
}

export default style
