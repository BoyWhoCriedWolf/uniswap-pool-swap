import { ChainId } from "@uniswap/sdk-core";
import { BaseContract } from "ethers/lib/ethers";
import { NonfungiblePositionManager, UniswapInterfaceMulticall } from "types/v3";
import { CurrencyKey } from "utils/currencyKey";
import { PositionInfo } from "./cache";
type ContractMap<T extends BaseContract> = {
    [key: number]: T;
};
export declare function useV3ManagerContracts(chainIds: ChainId[]): ContractMap<NonfungiblePositionManager>;
export declare function useInterfaceMulticallContracts(chainIds: ChainId[]): ContractMap<UniswapInterfaceMulticall>;
type PriceMap = {
    [key: CurrencyKey]: number | undefined;
};
export declare function usePoolPriceMap(positions: PositionInfo[] | undefined): {
    priceMap: PriceMap;
    pricesLoading: boolean;
};
export declare function useFeeValues(position: PositionInfo): {
    priceA: number | undefined;
    priceB: number | undefined;
    fees: number;
};
export {};
