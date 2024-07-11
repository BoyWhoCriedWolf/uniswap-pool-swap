import { Connection } from "connection/types";
export declare const getIsInjected: () => boolean;
/**
 * Checks the window object for the presence of a known injectors and returns the most relevant injector name and icon.
 * Returns a default metamask installation object if no wallet is detected.
 *
 * @param isDarkMode - optional parameter to determine which color mode of the
 */
export declare function getInjection(isDarkMode?: boolean): {
    name: string;
    icon: string;
};
/**
 * Returns true if `isMetaMask` is set to true and another non-metamask injector cannot be detected.
 *
 * Some non-metamask wallets set `isMetaMask` to true for dapp-compatability reasons. If one of these
 * injectors are detected, this function will return false.
 * https://wallet-docs.brave.com/ethereum/wallet-detection#compatability-with-metamask
 */
export declare const getIsMetaMaskWallet: () => boolean;
export declare const getIsCoinbaseWallet: () => boolean;
export declare enum ErrorCode {
    USER_REJECTED_REQUEST = 4001,
    UNAUTHORIZED = 4100,
    UNSUPPORTED_METHOD = 4200,
    DISCONNECTED = 4900,
    CHAIN_DISCONNECTED = 4901,
    CHAIN_NOT_ADDED = 4902,
    MM_ALREADY_PENDING = -32002,
    WC_V2_MODAL_CLOSED = "Error: Connection request reset. Please try again.",
    WC_MODAL_CLOSED = "Error: User closed modal",
    CB_REJECTED_REQUEST = "Error: User denied account authorization"
}
export declare function didUserReject(connection: Connection, error: any): boolean;
