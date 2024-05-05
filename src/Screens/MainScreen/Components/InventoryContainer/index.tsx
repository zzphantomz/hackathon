import * as React from 'react';
import Box from '@mui/material/Box';
import AwardLine from "@/Screens/MainScreen/Components/AwardLine";
import InventoryItem from "@/Screens/MainScreen/Components/InventoryLine";
import {Grid} from "@mui/material";

import umbrela from "@/Assets/Images/Item/umbrela.png";
import mask from "@/Assets/Images/Item/mask.png";
import fan from "@/Assets/Images/Item/Hand_fans.png";
import vest from "@/Assets/Images/Item/vest.png";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}



const dailyQuest = [
    {
        src: umbrela.src,
        name: 'Wagasa'
    },
    {
        src: vest.src,
        name: 'Armor vest'
    },
    {
        src: umbrela.src,
        name: 'Wagasa'
    },
    {
        src: mask.src,
        name: 'Kitsune mask'
    }
    ,
    {
        src: vest.src,
        name: 'Armor vest'
    },
    {
        src: fan.src,
        name: 'Hand fan'
    },
    {
        src: vest.src,
        name: 'Armor vest'
    },
    {
        src: mask.src,
        name: 'Kitsune mask'
    }
];





function InventoryContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Grid container
            sx={{ flexGrow: 1, bgcolor: 'none', height:350, overflow:'scroll', paddingLeft:7, marginTop:10, paddingTop:0, marginRight:5}}
        >
            {
                dailyQuest.map((item, index) => {
                    return (
                        <Grid key={index} item xs={4}>
                        <InventoryItem src={item.src} name={item.name} />
                        </Grid>
                    )
                })
            }

        </Grid>
    );
}

export default InventoryContainer;
