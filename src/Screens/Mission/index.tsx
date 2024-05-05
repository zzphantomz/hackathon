import {Grid, Typography} from "@mui/material";
import CanvasMissionScreen from "@/Screens/Mission/CanvasMissionScreen";
import CanvasMainScreen from "@/Screens/MainScreen/CanvasMainScreen";
import React from "react";
import ChatComponent from "@/Screens/Mission/Components/ChatComponent";

const Mission = () => {
    return (
        <>
            <Grid sx={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
                <CanvasMissionScreen />
             </Grid>
            <ChatComponent left />
            <ChatComponent right />
            <ChatComponent left />
            <ChatComponent left />
        </>
    )
}

export default Mission;
