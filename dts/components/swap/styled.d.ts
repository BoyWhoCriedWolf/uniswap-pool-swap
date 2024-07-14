import { ReactNode } from "react";
export declare const PageWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare const SwapWrapperOuter: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, {
    isDark?: boolean | undefined;
}, never>;
export declare const SwapWrapper: (props: React.ComponentProps<typeof SwapWrapperOuter>) => JSX.Element;
export declare const UniswapPopoverContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const UniswapXShine: (props: any) => JSX.Element;
export declare const SwapOptInSmallContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    visible: boolean;
    shouldAnimate: boolean;
}, never>;
export declare const UniswapXOptInLargeContainerPositioner: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const UniswapXOptInLargeContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    visible: boolean;
}, never>;
export declare const SwapMustache: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, {}, never>;
export declare const SwapMustacheShadow: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    clickable: boolean;
}, never>;
export declare const Dots: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare function SwapCallbackError({ error }: {
    error: ReactNode;
}): JSX.Element;
export declare const SwapShowAcceptChanges: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    gap?: string | undefined;
    justify?: "flex-start" | "center" | "flex-end" | "stretch" | "space-between" | "end" | "start" | undefined;
    grow?: true | undefined;
}, never>;
export {};
