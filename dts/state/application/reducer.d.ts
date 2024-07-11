import { ChainId } from "@uniswap/sdk-core";
export declare enum PopupType {
    Transaction = "transaction",
    Order = "order",
    FailedSwitchNetwork = "failedSwitchNetwork"
}
export type PopupContent = {
    type: PopupType.Transaction;
    hash: string;
} | {
    type: PopupType.Order;
    orderHash: string;
} | {
    type: PopupType.FailedSwitchNetwork;
    failedSwitchNetwork: ChainId;
};
export declare enum ApplicationModal {
    ADDRESS_CLAIM = 0,
    BLOCKED_ACCOUNT = 1,
    CLAIM_POPUP = 2,
    DELEGATE = 3,
    EXECUTE = 4,
    FEATURE_FLAGS = 5,
    FIAT_ONRAMP = 6,
    MENU = 7,
    METAMASK_CONNECTION_ERROR = 8,
    NETWORK_FILTER = 9,
    NETWORK_SELECTOR = 10,
    POOL_OVERVIEW_OPTIONS = 11,
    PRIVACY_POLICY = 12,
    QUEUE = 13,
    SELF_CLAIM = 14,
    SETTINGS = 15,
    SHARE = 16,
    TAX_SERVICE = 17,
    TIME_SELECTOR = 18,
    VOTE = 19,
    UK_DISCLAIMER = 20,
    UNISWAP_NFT_AIRDROP_CLAIM = 21
}
export type PopupList = Array<{
    key: string;
    show: boolean;
    content: PopupContent;
    removeAfterMs: number | null;
}>;
export interface ApplicationState {
    readonly chainId: number | null;
    readonly fiatOnramp: {
        available: boolean;
        availabilityChecked: boolean;
    };
    readonly openModal: ApplicationModal | null;
    readonly popupList: PopupList;
}
export declare const updateChainId: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "application/updateChainId">, setFiatOnrampAvailability: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "application/setFiatOnrampAvailability">, setOpenModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "application/setOpenModal">, addPopup: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "application/addPopup">, removePopup: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "application/removePopup">;
declare const _default: import("redux").Reducer<ApplicationState, import("redux").AnyAction>;
export default _default;
