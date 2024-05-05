
import React from 'react';
import {Box, Typography} from "@mui/material";
import style from "./style";

interface Award {
    award: string;
    text: string;
    status: string;
}

const AwardLine = (props:Award) => {
    const { award, text, status} = props;
    let stylebox
    switch (status) {
        case 'complete':
            stylebox = style.completeBackground
            break;
        case 'incomplete':
            stylebox = style.inCompleteBackground
            break;
        default:
            stylebox = style.completedBackground
            break;
    }
    return (
       <Box sx={stylebox}>
           <Typography
               sx={
               style.awardText
               }
               variant="h6" gutterBottom component="div">+{award}</Typography>
           <Box>
           <Typography
               sx={
                   style.descriptionText
               }
               variant="h6" gutterBottom component="div">{text}</Typography>
               <Box sx={{position: "absolute", right: 25, top: 45}}>
               </Box>
           </Box>
       </Box>
    );
}

export default AwardLine
