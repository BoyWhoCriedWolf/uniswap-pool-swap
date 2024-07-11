import { QueryResult } from "@apollo/client";
import { ChainId, Currency } from "@uniswap/sdk-core";
import { Chain, ContractInput, HistoryDuration, TokenStandard } from "./__generated__/types-and-hooks";
export declare enum PollingInterval {
    Slow,
    Normal,
    Fast,
    LightningMcQueen
}
export declare function usePollQueryWhileMounted<T, K>(queryResult: QueryResult<T, K>, interval: PollingInterval): QueryResult<T, K>;
export declare enum TimePeriod {
    HOUR = 0,
    DAY = 1,
    WEEK = 2,
    MONTH = 3,
    YEAR = 4
}
export declare function toHistoryDuration(timePeriod: TimePeriod): HistoryDuration;
export type PricePoint = {
    timestamp: number;
    value: number;
};
export declare function isPricePoint(p: PricePoint | null): p is PricePoint;
export declare const GQL_MAINNET_CHAINS: readonly [Chain.Ethereum, Chain.Polygon, Chain.Celo, Chain.Optimism, Chain.Arbitrum, Chain.Bnb, Chain.Avalanche, Chain.Base];
declare const UX_SUPPORTED_GQL_CHAINS: readonly [Chain.Ethereum, Chain.Polygon, Chain.Celo, Chain.Optimism, Chain.Arbitrum, Chain.Bnb, Chain.Avalanche, Chain.Base, Chain.EthereumGoerli, Chain.EthereumSepolia];
export type InterfaceGqlChain = (typeof UX_SUPPORTED_GQL_CHAINS)[number];
export declare const CHAIN_ID_TO_BACKEND_NAME: {
    [key: number]: InterfaceGqlChain;
};
export declare function chainIdToBackendName(chainId: number | undefined): Chain.Arbitrum | Chain.Avalanche | Chain.Base | Chain.Bnb | Chain.Celo | Chain.Ethereum | Chain.EthereumGoerli | Chain.EthereumSepolia | Chain.Optimism | Chain.Polygon;
declare const GQL_CHAINS: readonly [ChainId.MAINNET, ChainId.OPTIMISM, ChainId.POLYGON, ChainId.ARBITRUM_ONE, ChainId.CELO];
type GqlChainsType = (typeof GQL_CHAINS)[number];
export declare function isGqlSupportedChain(chainId: number | undefined): chainId is GqlChainsType;
export declare function toContractInput(currency: Currency): ContractInput;
export declare function gqlToCurrency(token: {
    address?: string;
    chain: Chain;
    standard?: TokenStandard;
    decimals?: number;
    name?: string;
    symbol?: string;
}): Currency | undefined;
/**
 * @param chainName parsed in chain name from url query parameter
 * @returns if chainName is a valid chain name, returns the backend chain name, otherwise returns undefined
 */
export declare function getValidUrlChainName(chainName: string | undefined): Chain | undefined;
/**
 * @param chainName parsed in chain name from url query parameter
 * @returns if chainName is a valid chain name supported by the backend, returns the backend chain name, otherwise returns Chain.Ethereum
 */
export declare function validateUrlChainParam(chainName: string | undefined): Chain.Arbitrum | Chain.Avalanche | Chain.Base | Chain.Bnb | Chain.Celo | Chain.Ethereum | Chain.EthereumGoerli | Chain.EthereumSepolia | Chain.Optimism | Chain.Polygon;
export declare function isSupportedGQLChain(chain: Chain): chain is InterfaceGqlChain;
export declare function supportedChainIdFromGQLChain(chain: InterfaceGqlChain): ChainId;
export declare function supportedChainIdFromGQLChain(chain: Chain): ChainId | undefined;
export declare function logSentryErrorForUnsupportedChain({ extras, errorMessage, }: {
    extras?: Record<string, any>;
    errorMessage: string;
}): void;
export declare const BACKEND_SUPPORTED_CHAINS: readonly [Chain.Ethereum, Chain.Arbitrum, Chain.Optimism, Chain.Polygon, Chain.Base, Chain.Bnb, Chain.Celo];
export declare const BACKEND_NOT_YET_SUPPORTED_CHAIN_IDS: readonly [ChainId.AVALANCHE];
export declare function getTokenDetailsURL({ address, chain, inputAddress, }: {
    address?: string | null;
    chain: Chain;
    inputAddress?: string | null;
}): string;
export declare function unwrapToken<T extends {
    address?: string | null;
} | null>(chainId: number, token: T): T;
export {};
