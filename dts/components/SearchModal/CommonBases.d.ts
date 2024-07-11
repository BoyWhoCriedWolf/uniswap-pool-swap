/// <reference types="react" />
import { Currency } from "@uniswap/sdk-core";
export default function CommonBases({ chainId, onSelect, selectedCurrency, searchQuery, isAddressSearch, }: {
    chainId?: number;
    selectedCurrency?: Currency | null;
    onSelect: (currency: Currency) => void;
    searchQuery: string;
    isAddressSearch: string | false;
}): JSX.Element | null;
