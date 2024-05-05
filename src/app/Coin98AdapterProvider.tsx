"use client";

import {
    BLOCKCHAINS_DATA,
    WalletProvider,
} from "@coin98-com/wallet-adapter-react";
import { WalletModalProvider } from "@coin98-com/wallet-adapter-react-ui";
import { Coin98WalletAdapter } from "@coin98-com/wallet-adapter-coin98";

interface ContainerProps {
    children: React.ReactNode;
}

const Coin98AdapterProvider: React.FC<ContainerProps> = ({ children }) => {
    const enables = [BLOCKCHAINS_DATA.ethereum];
    const wallets = [Coin98WalletAdapter];
    return (
        <WalletProvider wallets={wallets} enables={enables} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
    );
};

export default Coin98AdapterProvider;
