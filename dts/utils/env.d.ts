export declare function isDevelopmentEnv(): boolean;
export declare function isTestEnv(): boolean;
export declare function isStagingEnv(): boolean;
export declare function isProductionEnv(): boolean;
export declare function isAppUniswapOrg({ hostname }: {
    hostname: string;
}): boolean;
export declare function isAppUniswapStagingOrg({ hostname, }: {
    hostname: string;
}): boolean;
export declare function isBrowserRouterEnabled(): boolean;
export declare function isSentryEnabled(): boolean;
export declare function getEnvName(): "production" | "staging" | "development";
