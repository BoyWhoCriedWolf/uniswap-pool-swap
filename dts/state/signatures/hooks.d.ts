import { ChainId } from "@uniswap/sdk-core";
import { UniswapXOrderStatus } from "lib/hooks/orders/types";
import { SignatureDetails, UniswapXOrderDetails } from "./types";
export declare function useAllSignatures(): {
    [id: string]: SignatureDetails;
};
export declare function usePendingOrders(): UniswapXOrderDetails[];
export declare function useOrder(orderHash: string): UniswapXOrderDetails | undefined;
export declare function useAddOrder(): (offerer: string, orderHash: string, chainId: ChainId, expiry: number, swapInfo: UniswapXOrderDetails["swapInfo"]) => void;
export declare function isFinalizedOrder(orderStatus: UniswapXOrderStatus): boolean;
export declare function isOnChainOrder(orderStatus: UniswapXOrderStatus): boolean;
