/// <reference types="react" />
import { ChainId } from "@uniswap/sdk-core";
export declare function FailedNetworkSwitchPopup({ chainId, onClose, }: {
    chainId: ChainId;
    onClose: () => void;
}): JSX.Element;
export declare function TransactionPopupContent({ chainId, hash, onClose, }: {
    chainId: ChainId;
    hash: string;
    onClose: () => void;
}): JSX.Element | null;
export declare function UniswapXOrderPopupContent({ orderHash, onClose, }: {
    orderHash: string;
    onClose: () => void;
}): JSX.Element | null;
