import * as React from 'react';
import Box from '@mui/material/Box';
import AwardLine from "@/Screens/MainScreen/Components/AwardLine";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}



const dailyQuest = [
    {
        award: '2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'complete'
    },
    {
        award: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'incomplete'
    },
    {
        award: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'complete'
    },
    {
        award: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'complete'
    },
    {
        award: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'completed'
    },
    {
        award: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'incomplete'
    },
    {
        award: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        status: 'complete'
    },
];





function ModalDailyQuest() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'none', height:350, overflow:'scroll', paddingLeft:7, marginTop:10, paddingTop:0, marginRight:5}}
        >
            {
                dailyQuest.map((item, index) => {
                    return (
                        <AwardLine key={index} award={item.award} text={item.text} status={item.status} />
                    )
                })
            }

        </Box>
    );
}

export default ModalDailyQuest;
