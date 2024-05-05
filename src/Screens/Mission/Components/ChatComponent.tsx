import {Grid, Typography} from "@mui/material";
import React from "react";

interface ChatComponentProps {
    left?: boolean;
}

const ChatComponent = (props:ChatComponentProps) => {
    return (
        <Grid sx = {{
            fontSize: 12,
            marginTop: 2,
            fontWeight: "500",
            padding: 2,
            width: 600,
            height: 100,
            marginLeft:props.left? 20: 100,

            color: "rgb(90, 75, 56) !important",
            border: "1px solid #fff",
            borderRadius: 2,
            backgroundColor: "rgb(255, 248, 217) !important"}}
        >
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </Typography>
        </Grid>
    )
}

export default ChatComponent;
