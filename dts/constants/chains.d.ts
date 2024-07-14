import { ChainId, SupportedChainsType } from "@uniswap/sdk-core";
export declare const CHAIN_IDS_TO_NAMES: {
    readonly 1: "mainnet";
    readonly 5: "goerli";
    readonly 11155111: "sepolia";
    readonly 137: "polygon";
    readonly 80001: "polygon_mumbai";
    readonly 42220: "celo";
    readonly 44787: "celo_alfajores";
    readonly 42161: "arbitrum";
    readonly 421613: "arbitrum_goerli";
    readonly 10: "optimism";
    readonly 420: "optimism_goerli";
    readonly 56: "bnb";
    readonly 43114: "avalanche";
    readonly 8453: "base";
};
export type SupportedInterfaceChain = Exclude<SupportedChainsType, ChainId.BASE_GOERLI>;
export declare function isSupportedChain(chainId: number | null | undefined | ChainId, featureFlags?: Record<number, boolean>): chainId is SupportedInterfaceChain;
export declare function asSupportedChain(chainId: number | null | undefined | ChainId, featureFlags?: Record<number, boolean>): SupportedInterfaceChain | undefined;
export declare const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS: readonly [ChainId.MAINNET, ChainId.POLYGON, ChainId.CELO, ChainId.OPTIMISM, ChainId.ARBITRUM_ONE, ChainId.BNB, ChainId.AVALANCHE, ChainId.BASE];
/**
 * Supported networks for V2 pool behavior.
 */
export declare const SUPPORTED_V2POOL_CHAIN_IDS: readonly [ChainId.MAINNET, ChainId.GOERLI];
export declare const TESTNET_CHAIN_IDS: readonly [ChainId.GOERLI, ChainId.SEPOLIA, ChainId.POLYGON_MUMBAI, ChainId.ARBITRUM_GOERLI, ChainId.OPTIMISM_GOERLI, ChainId.CELO_ALFAJORES];
/**
 * All the chain IDs that are running the Ethereum protocol.
 */
export declare const L1_CHAIN_IDS: readonly [ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA, ChainId.POLYGON, ChainId.POLYGON_MUMBAI, ChainId.CELO, ChainId.CELO_ALFAJORES, ChainId.BNB, ChainId.AVALANCHE];
export type SupportedL1ChainId = (typeof L1_CHAIN_IDS)[number];
/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export declare const L2_CHAIN_IDS: readonly [ChainId.ARBITRUM_ONE, ChainId.ARBITRUM_GOERLI, ChainId.OPTIMISM, ChainId.OPTIMISM_GOERLI, ChainId.BASE];
export type SupportedL2ChainId = (typeof L2_CHAIN_IDS)[number];
/**
 * Get the priority of a chainId based on its relevance to the user.
 * @param {ChainId} chainId - The chainId to determine the priority for.
 * @returns {number} The priority of the chainId, the lower the priority, the earlier it should be displayed, with base of MAINNET=0.
 */
export declare function getChainPriority(chainId: ChainId): number;
export declare function isUniswapXSupportedChain(chainId: number): boolean;
