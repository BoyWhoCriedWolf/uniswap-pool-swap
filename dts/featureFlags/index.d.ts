import { ReactNode } from "react";
/**
 * The value here must match the value in the statsig dashboard, if you plan to use statsig.
 */
export declare enum FeatureFlag {
    traceJsonRpc = "traceJsonRpc",
    debounceSwapQuote = "debounce_swap_quote",
    fallbackProvider = "fallback_provider",
    uniswapXSyntheticQuote = "uniswapx_synthetic_quote",
    uniswapXEthOutputEnabled = "uniswapx_eth_output_enabled",
    uniswapXExactOutputEnabled = "uniswapx_exact_output_enabled",
    multichainUX = "multichain_ux",
    currencyConversion = "currency_conversion",
    fotAdjustedmentsEnabled = "fot_dynamic_adjustments_enabled",
    infoExplore = "info_explore",
    infoTDP = "info_tdp",
    infoPoolPage = "info_pool_page",
    infoLiveViews = "info_live_views",
    uniswapXDefaultEnabled = "uniswapx_default_enabled",
    quickRouteMainnet = "enable_quick_route_mainnet"
}
export declare const featureFlagSettings: import("jotai").PrimitiveAtom<Record<string, string>>;
export declare function useUpdateFlag(): (featureFlag: string, option: string) => void;
export declare function FeatureFlagsProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export declare function useFeatureFlagsIsLoaded(): boolean;
export declare enum BaseVariant {
    Control = "control",
    Enabled = "enabled"
}
export declare function useBaseFlag(flag: string, defaultValue?: BaseVariant): BaseVariant;
