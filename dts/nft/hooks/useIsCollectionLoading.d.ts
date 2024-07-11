interface State {
    isCollectionNftsLoading: boolean;
    setIsCollectionNftsLoading: (isCollectionNftsLoading: boolean) => void;
    isCollectionStatsLoading: boolean;
    setIsCollectionStatsLoading: (isCollectionStatsLoading: boolean) => void;
}
export declare const useIsCollectionLoading: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: State | Partial<State> | ((state: State) => State | Partial<State>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
