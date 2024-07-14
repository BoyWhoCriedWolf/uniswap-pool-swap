import { ChainId, Currency } from "@uniswap/sdk-core";
import { TokenStandard } from "graphql/data/__generated__/types-and-hooks";
import { Chain } from "graphql/data/Token";
export type CurrencyKey = string;
export declare function buildCurrencyKey(chainId: ChainId, address: string): CurrencyKey;
export declare function currencyKey(currency: Currency): CurrencyKey;
export declare function currencyKeyFromGraphQL(contract: {
    address?: string;
    chain: Chain;
    standard?: TokenStandard;
}): CurrencyKey;
