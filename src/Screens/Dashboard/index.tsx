"use client";
import {Box, Button, Dialog, Grid, Link, Typography} from "@mui/material";
import React, {useEffect} from "react";
import CanvasDashBoard from "@/Screens/Dashboard/CanvasDashBoard";
import Image from "next/image";
import lang from "@/Assets/Images/Icon/lang.png";
import share from "@/Assets/Images/Icon/share.png";
import quest from "@/Assets/Images/Icon/quest.png";
import music from "@/Assets/Images/Icon/music.png";
import Coin98 from "@/Assets/Images/Icon/Coin98.png";
import {Modal} from "@mui/base";
import style from "./style";
import {useWallet} from "@coin98-com/wallet-adapter-react";
import {useWalletModal} from "@coin98-com/wallet-adapter-react-ui";
import splitAddress from "@/utils/splitAddress";
import {useRouter} from "next/navigation";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Dashboard = (props) => {
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const router = useRouter()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { openWalletModal } = useWalletModal();

    const handleCloseDialog = () => setOpenDialog(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const {
        address,
        selectedChainId,
        disconnect,
        selectedBlockChain,
        connected,
    } = useWallet();

    const handleConnect = () => {
        openWalletModal();
    }

    const onStart = () => {
        if (!connected) {
            handleOpen()
        }
        else {
            router.push('/main')
        }
    }

    const handleLogOut = () => {
        disconnect()
        handleCloseDialog()
    }



    useEffect(() => {
        setOpen(false)
    },[connected])

    return <>

        <Grid sx={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
        <CanvasDashBoard />
        </Grid>
        <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent={'space-between'}>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style.modalStyle}>
                            <Button sx={style.buttonClose} onClick={handleClose}>
                                <Typography>
                                    X
                                </Typography>
                            </Button>
                            <Box>
                                <Button onClick={handleConnect}  >
                                    <Image src={Coin98.src} alt={'coin98'} width={80} height={40} />
                                </Button>
                                <Typography sx={{color: "#90bbae !important"}}>
                                    Coin98 Wallet
                                </Typography>
                            </Box>
                        </Box>
                    </Modal>
                    <Button sx={{
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
                            onClick={connected?handleOpenDialog:handleOpen}
                            variant="contained"
                    >
                        <Typography >
                            {address?splitAddress(address):"Connect Wallet"}
                        </Typography>
                    </Button>
                    <div>
                    <Button sx={{
                        fontSize: 20,
                        marginTop: 5,
                        marginLeft: 5,

                        marginRight: 2,
                        fontWeight: "bold",
                        color: "#90bbae !important"
                    }}
                            variant="text"
                    >
                        <Image src={lang.src} width={50} height={50} alt={'lang'} />
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
                    </div>

                </Grid>
                <Box sx={{position: "absolute", bottom:'20%', width:'100%'}}>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item>
                            <Button onClick={onStart}  sx={style.paperContainer}>
                            <Typography variant={'h5'} sx={{color: "#fff !important", fontWeight: "bold"}}>
                                Start your journey
                            </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
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
        </>

}

export default Dashboard
