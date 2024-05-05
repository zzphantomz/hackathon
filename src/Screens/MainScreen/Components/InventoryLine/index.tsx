import React from 'react';
import {Grid, Typography} from "@mui/material";
import style from "./style";
import Image from "next/image";

interface Item {
    src: string;
    name: string;
}

const InventoryItem= (props:Item) => {
    const {src,name} = props;

    return (
       <Grid container sx={{
           ...style.itemContainer,
       }}>
           <Grid item xs={6} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
           }}>
               <Image src={src} width={80} height={50} alt={'quest'} />
           </Grid>
           <Grid item xs={6}>
               <Typography sx={{
                   color: "#F7839D !important",
                     fontWeight: "bold",
                        fontSize: 15,
                   borderBttom: "1px solid #F7839D",
               }}  gutterBottom component="div"
               >
                   {name}
               </Typography>
               <Typography sx={{
                   color: "#000 !important",
                   fontSize: 10,
               }}  gutterBottom component="div"
               >
                   lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </Typography>
           </Grid>

       </Grid>
    );
}

export default InventoryItem
