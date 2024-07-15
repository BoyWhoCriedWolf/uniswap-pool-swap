import React from "react";
export declare const MEDIA_WIDTHS: {
    deprecated_upToExtraSmall: number;
    deprecated_upToSmall: number;
    deprecated_upToMedium: number;
    deprecated_upToLarge: number;
};
export declare const BREAKPOINTS: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
};
declare const gapValues: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export type Gap = keyof typeof gapValues;
export declare function getTheme(darkMode: boolean): {
    grids: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    fonts: {
        code: string;
    };
    shadow1: string;
    deprecated_mediaWidth: {
        deprecated_upToExtraSmall: import("styled-components").ThemedCssFunction<import("styled-components").DefaultTheme>;
        deprecated_upToSmall: import("styled-components").ThemedCssFunction<import("styled-components").DefaultTheme>;
        deprecated_upToMedium: import("styled-components").ThemedCssFunction<import("styled-components").DefaultTheme>;
        deprecated_upToLarge: import("styled-components").ThemedCssFunction<import("styled-components").DefaultTheme>;
    };
    navHeight: number;
    navVerticalPad: number;
    mobileBottomBarHeight: number;
    maxWidth: string;
    breakpoint: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
    };
    transition: {
        duration: {
            slow: string;
            medium: string;
            fast: string;
        };
        timing: {
            ease: string;
            in: string;
            out: string;
            inOut: string;
        };
    };
    opacity: {
        hover: number;
        click: number;
        disabled: number;
        enabled: number;
    };
    deprecated_yellow1: string;
    deprecated_yellow2: string;
    deprecated_yellow3: string;
    deprecated_blue4: string;
    deprecated_backgroundScrolledSurface: string;
    deprecated_accentWarning: string;
    deprecated_accentWarningSoft: string;
    deprecated_accentFailureSoft: string;
    deprecated_accentTextLightPrimary: string;
    deprecated_deepShadow: string;
    deprecated_shallowShadow: string;
    deprecated_networkDefaultShadow: string;
    deprecated_stateOverlayHover: string;
    deprecated_stateOverlayPressed: string;
    deprecated_hoverState: string;
    deprecated_hoverDefault: string;
    background: string;
    neutral1: string;
    neutral2: string;
    neutral3: string;
    surface1: string;
    surface2: string;
    surface3: string;
    surface4: string;
    surface5: string;
    accent1: string;
    accent2: string;
    success: string;
    critical: string;
    scrim: string;
    white: string;
    black: string;
    chain_1: string;
    chain_3: string;
    chain_4: string;
    chain_5: string;
    chain_10: string;
    chain_137: string;
    chain_42: string;
    chain_56: string;
    chain_420: string;
    chain_42161: string;
    chain_421613: string;
    chain_80001: string;
    chain_43114: string;
    chain_137_background: string;
    chain_10_background: string;
    chain_43114_background: string;
    chain_42161_background: string;
    chain_84531: string;
    chain_56_background: string;
    promotional: string;
    brandedGradient: string;
    promotionalGradient: string;
    darkMode: boolean;
};
export default function ThemeProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare const ThemedGlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export {};
