import { Currency } from "@uniswap/sdk-core";
import { TokenTradeInput } from "graphql/data/__generated__/types-and-hooks";
interface TokenInputState {
    inputCurrency?: Currency;
    setInputCurrency: (currency: Currency | undefined) => void;
    clearInputCurrency: () => void;
    tokenTradeInput?: TokenTradeInput;
    setTokenTradeInput: (tokenTradeInput: TokenTradeInput | undefined) => void;
}
export declare const useTokenInput: import("zustand/traditional").UseBoundStoreWithEqualityFn<Omit<import("zustand").StoreApi<TokenInputState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: TokenInputState | Partial<TokenInputState> | ((state: TokenInputState) => TokenInputState | Partial<TokenInputState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
