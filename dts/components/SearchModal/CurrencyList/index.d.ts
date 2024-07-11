import { Currency, CurrencyAmount, Token } from "@uniswap/sdk-core";
import { TokenBalances } from "lib/hooks/useTokenList/sorting";
import { CSSProperties, MutableRefObject } from "react";
import { FixedSizeList } from "react-window";
import { WrappedTokenInfo } from "../../../state/lists/wrappedTokenInfo";
export declare function CurrencyRow({ currency, onSelect, isSelected, otherSelected, style, showCurrencyAmount, eventProperties, balance, }: {
    currency: Currency;
    onSelect: (hasWarning: boolean) => void;
    isSelected: boolean;
    otherSelected: boolean;
    style?: CSSProperties;
    showCurrencyAmount?: boolean;
    eventProperties: Record<string, unknown>;
    balance?: CurrencyAmount<Currency>;
}): JSX.Element;
export declare const formatAnalyticsEventProperties: (token: Token, index: number, data: any[], searchQuery: string, isAddressSearch: string | false) => {
    search_token_symbol_input: string;
    token_symbol: string | undefined;
    token_address: string;
    is_suggested_token: boolean;
    is_selected_from_list: boolean;
    scroll_position: string;
    token_list_index: number;
    token_list_length: number;
} | {
    search_token_address_input: string;
    token_symbol: string | undefined;
    token_address: string;
    is_suggested_token: boolean;
    is_selected_from_list: boolean;
    scroll_position: string;
    token_list_index: number;
    token_list_length: number;
};
export default function CurrencyList({ height, currencies, otherListTokens, selectedCurrency, onCurrencySelect, otherCurrency, fixedListRef, showCurrencyAmount, isLoading, searchQuery, isAddressSearch, balances, }: {
    height: number;
    currencies: Currency[];
    otherListTokens?: WrappedTokenInfo[];
    selectedCurrency?: Currency | null;
    onCurrencySelect: (currency: Currency, hasWarning?: boolean) => void;
    otherCurrency?: Currency | null;
    fixedListRef?: MutableRefObject<FixedSizeList | undefined>;
    showCurrencyAmount?: boolean;
    isLoading: boolean;
    searchQuery: string;
    isAddressSearch: string | false;
    balances: TokenBalances;
}): JSX.Element;
