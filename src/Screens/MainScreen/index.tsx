"use client";
import {Backdrop, Box, Button, Dialog, Grid, Typography} from "@mui/material";
import React, {useEffect} from "react";
import Image from "next/image";
import lang from "@/Assets/Images/Icon/lang.png";
import Google from "@/Assets/Images/Icon/google.png";
import Coin98 from "@/Assets/Images/Icon/Coin98.png";
import {Modal} from "@mui/base";
import style from "./style";
import CanvasMainScreen from "@/Screens/MainScreen/CanvasMainScreen";
import {useWallet} from "@coin98-com/wallet-adapter-react";
import splitAddress from "@/utils/splitAddress";
import ModalDailyQuest from "@/Screens/MainScreen/Components/ModalDailyQuest";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useRouter} from "next/navigation";
import quest from "@/Assets/Images/Icon/quest.png";
import share from "@/Assets/Images/Icon/share.png";
import music from "@/Assets/Images/Icon/music.png";
import point from "@/Assets/Images/Icon/point.png";
import {getBalance} from "@/Controller/evm";
import InventoryContainer from "@/Screens/MainScreen/Components/InventoryContainer";
import {Canvas} from "@react-three/fiber";
import Character from "@/Components/Character";
import Mission1 from "@/Components/Mission1";
import Mission3 from "@/Components/Mission3";
import Mission2 from "@/Components/Mission2";


const Dashboard = (props) => {
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const router = useRouter()
    const [balance, setBalance] = React.useState(0);
    const [openMap, setOpenMap] = React.useState(false);
    const [selectModal, setSelectModal] = React.useState('');
    const handleOpen = (modal:string) => {
        setOpen(true)
        setSelectModal(modal)

    };
    const handleOpenMap = () => setOpenMap(true)
    const handleCloseMap = () => setOpenMap(false)
    const handleClose = () =>{
        setOpen(false)
        setSelectModal('')
    };
    const {
        address,
        selectedChainId,
        disconnect,
        selectedBlockChain,
        connected,
    } = useWallet();

    const handleCloseDialog = () => setOpenDialog(false);
    const handleOpenDialog = () => setOpenDialog(true);

    const handleLogOut = () => {
        disconnect()
        handleCloseDialog()
        router.push('/')
    }

    const getWalletBalance = async () => {
        const balance = await getBalance(address)
        setBalance(balance)

    }

    useEffect(() => {
        if (address){
            getWalletBalance()
        }
    }, [address])




    return <Grid container>
        <Backdrop
            sx={{ color: '#fff', zIndex: 1 }}
            open={open||openMap}
            onClick={handleClose}
        >
            <Modal
                open={openMap}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style.modalMapStyle}>
                    <Button onClick={handleCloseMap} sx={style.closeButton}>
                        <Typography sx={{color: "#fff !important", fontWeight: "bold"}}>
                            Close
                        </Typography>
                    </Button>
                    <Canvas>
                        <Mission1 position={[-4, 1, 0]} router = {router} />
                        <Mission2 position={[1, -2, 0]} router = {router} />
                        <Mission3 position={[4, 2, 0]}  router = {router}/>

                    </Canvas>
                </Box>
            </Modal>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={style.modalStyle}>
                {
                    selectModal === 'daily' ? <ModalDailyQuest /> : <InventoryContainer />
                }
            </Box>
        </Modal>
        </Backdrop>
        <Grid sx={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
            <CanvasMainScreen />
        </Grid>
        <Grid container  spacing={2}>

            <Grid item xs={12}>
                <Grid container justifyContent={'space-between'}>

                    <Button onClick={handleOpenDialog} sx={{
                        fontSize: 12,
                        height: 20,
                        marginTop: 5,
                        marginLeft: 2,
                        fontWeight: "500",
                        padding: 2,
                        color: "#F9F9F9 !important",
                        border: "5px solid #FFC4C4",
                        borderRadius: 2,
                        backgroundColor: "#F7839D !important"

                    }}
                            variant="contained"
                    >
                        <Typography >
                            {splitAddress(address)}
                        </Typography>
                    </Button>

                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                    }}>
                        <Box sx={{
                            height: 50,
                            fontSize: 20,
                            marginTop: 5,
                            marginLeft: 5,
                            position: "relative",
                            marginRight: 2,
                            fontWeight: "bold",
                            color: "#90bbae !important"

                        }}
                                variant="text"
                        >
                            <Image src={point.src} width={150} height={70} alt={'quest'} />
                            <Typography sx={{
                                color: "#90bbae !important",
                                fontWeight: "bold",
                                position: "absolute",
                                top: 12,
                                right: 5,
                                fontSize: 20,
                                paddingRight: 2
                            }}>
                                {balance}
                            </Typography>
                        </Box>
                        <Button sx={{
                            fontSize: 20,
                            marginTop: 5,
                            marginRight: 2,

                            fontWeight: "bold",
                            color: "#90bbae !important"
                        }}
                                variant="text"
                        >
                            <Image src={quest.src} width={50} height={50} alt={'quest'} />
                        </Button>
                        <Button sx={{
                            fontSize: 20,
                            marginTop: 5,
                            marginRight: 2,
                            fontWeight: "bold",
                            color: "#90bbae !important"
                        }}
                                variant="text"
                        >
                            <Image src={share.src} width={50} height={50} alt={'share'} />
                        </Button>
                        <Button sx={{
                            fontSize: 20,
                            marginTop: 5,
                            marginRight: 2,
                            fontWeight: "bold",
                            color: "#90bbae !important"
                        }}
                                variant="text"
                        >
                            <Image src={music.src} width={50} height={50} alt={'music'} />
                        </Button>
                    </Box>
                </Grid>
                <Box sx={{position: "absolute", bottom:'10%', width:'100%'}}>
                    <Grid container justifyContent={'flex-end'} alignItems={'center'} padding={10}>
                        <Grid item>
                            <Button onClick={()=>handleOpen('bag')} sx={style.bagContainer}>
                                <Typography  sx={{color: "#eb4034 !important", fontWeight: "bold", marginTop:5}}>
                                    Bag
                                </Typography>
                            </Button>
                            <Button onClick={()=>handleOpen('daily')} sx={style.dailyContainer}>
                                <Typography  sx={{color: "#eb4034 !important", fontWeight: "bold", marginTop:5}}>
                                    Daily
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Box sx={{position: "absolute", bottom:'25%', width:'100%'}}>
                <Grid container justifyContent={'center'} alignItems={'center'}>
                    <Grid item>
                        <Button onClick={handleOpenMap} variant={'contained'}
                                sx={{
                                    backgroundColor: "#F7839D",
                                    color: "#fff",
                                    border: "5px solid #FFC4C4",
                                    fontSize: 20,
                                    fontWeight: "bold",

                                    padding: 2,
                                    borderRadius: 4,
                                    height: 70,
                                    width: 200
                                }}
                        >
                            <Typography variant={'h4'} sx={{color: "#fff !important", fontWeight: "bold"}}>
                                Play
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>

        <Dialog
            fullScreen={fullScreen}
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="responsive-dialog-title"
            hideBackdrop={true}
        >
            <DialogTitle
                id="responsive-dialog-title">
                {"Disconnect Wallet"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to disconnect your wallet?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseDialog}>
                    Disagree
                </Button>
                <Button onClick={handleLogOut} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    </Grid>

}

export default Dashboard
