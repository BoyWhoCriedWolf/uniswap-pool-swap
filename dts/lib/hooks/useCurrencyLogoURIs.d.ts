import { ChainId } from "@uniswap/sdk-core";
type Network = "ethereum" | "arbitrum" | "optimism" | "polygon" | "smartchain" | "celo" | "avalanchec";
export declare function chainIdToNetworkName(networkId: ChainId): Network;
export declare function getNativeLogoURI(chainId?: ChainId): string;
export default function useCurrencyLogoURIs(currency: {
    isNative?: boolean;
    isToken?: boolean;
    address?: string;
    chainId: number;
    logoURI?: string | null;
} | null | undefined): string[];
export {};
