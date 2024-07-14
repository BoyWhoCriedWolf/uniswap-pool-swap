interface NFTClaim {
    isClaimAvailable: boolean;
    setIsClaimAvailable: (isClaimAvailable: boolean) => void;
}
export declare const useIsNftClaimAvailable: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<NFTClaim>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: NFTClaim | Partial<NFTClaim> | ((state: NFTClaim) => NFTClaim | Partial<NFTClaim>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
