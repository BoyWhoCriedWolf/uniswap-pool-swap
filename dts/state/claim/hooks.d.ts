import { CurrencyAmount, Token } from "@uniswap/sdk-core";
export declare function useUserHasAvailableClaim(account: string | null | undefined): boolean;
export declare function useUserUnclaimedAmount(account: string | null | undefined): CurrencyAmount<Token> | undefined;
export declare function useClaimCallback(account: string | null | undefined): {
    claimCallback: () => Promise<string>;
};
