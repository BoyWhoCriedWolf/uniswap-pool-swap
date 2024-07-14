/// <reference types="react" />
import { Listing, WalletAsset } from "nft/types";
export declare const BelowFloorWarningModal: ({ listingsBelowFloor, closeModal, startListing, }: {
    listingsBelowFloor: [WalletAsset, Listing][];
    closeModal: () => void;
    startListing: () => void;
}) => JSX.Element;
