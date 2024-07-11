import { ChainId, Token } from "@uniswap/sdk-core";
import { UniswapInterfaceMulticall } from "types/v3";
type TokenMap = {
    [address: string]: Token | undefined;
};
export type Call = {
    target: string;
    callData: string;
    gasLimit: number;
};
export declare const DEFAULT_GAS_LIMIT = 1000000;
export declare function getTokensAsync(addresses: string[], chainId: ChainId, multicall: UniswapInterfaceMulticall): Promise<TokenMap>;
export {};
