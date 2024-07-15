import { ChainId } from "@uniswap/sdk-core";
import { Wallet } from "./types";
export interface WalletState {
    connectedWallets: Wallet[];
    switchingChain: ChainId | false;
}
export declare const addConnectedWallet: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "wallets/addConnectedWallet">, startSwitchingChain: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "wallets/startSwitchingChain">, endSwitchingChain: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"wallets/endSwitchingChain">;
declare const _default: import("redux").Reducer<WalletState, import("redux").AnyAction>;
export default _default;
