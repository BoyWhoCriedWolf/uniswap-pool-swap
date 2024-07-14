import { NftAssetSortableField } from "graphql/data/__generated__/types-and-hooks";
export declare enum SortBy {
    LowToHigh = 0,
    HighToLow = 1,
    RareToCommon = 2,
    CommonToRare = 3
}
export declare const SortByPointers: {
    1: string;
    0: string;
    2: string;
    3: string;
};
interface QueryInfo {
    field: NftAssetSortableField;
    asc: boolean;
}
export declare const SortByQueries: {
    1: QueryInfo;
    0: QueryInfo;
    2: QueryInfo;
    3: QueryInfo;
};
export type Trait = {
    trait_type: string;
    trait_value: string;
    trait_count?: number;
    floorPrice?: number;
};
interface State {
    traits: Trait[];
    hasRarity: boolean;
    markets: string[];
    minPrice: string;
    maxPrice: string;
    minRarity: number | "";
    maxRarity: number | "";
    marketCount: Record<string, number>;
    buyNow: boolean;
    search: string;
    sortBy: SortBy;
    showFullTraitName: {
        shouldShow: boolean;
        trait_value?: string;
        trait_type: string;
    };
}
type Actions = {
    setHasRarity: (hasRarity: boolean) => void;
    setMarketCount: (_: Record<string, number>) => void;
    addMarket: (market: string) => void;
    removeMarket: (market: string) => void;
    addTrait: (trait: Trait) => void;
    removeTrait: (trait: Trait) => void;
    reset: () => void;
    setMinPrice: (price: string) => void;
    setMaxPrice: (price: string) => void;
    setMinRarity: (range: number | "") => void;
    setMaxRarity: (range: number | "") => void;
    setBuyNow: (bool: boolean) => void;
    setSearch: (term: string) => void;
    setSortBy: (sortBy: SortBy) => void;
    toggleShowFullTraitName: (show: {
        shouldShow: boolean;
        trait_value: string;
        trait_type: string;
    }) => void;
};
export type CollectionFilters = State & Actions;
export declare const initialCollectionFilterState: State;
export declare const useCollectionFilters: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<CollectionFilters>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: CollectionFilters | Partial<CollectionFilters> | ((state: CollectionFilters) => CollectionFilters | Partial<CollectionFilters>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
