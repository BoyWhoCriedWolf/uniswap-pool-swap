/// <reference types="react" />
export declare const PortfolioRowWrapper: import("styled-components").StyledComponent<import("react").FunctionComponent<import("rebass").BoxProps>, import("styled-components").DefaultTheme, {
    width?: string | undefined;
    align?: string | undefined;
    justify?: string | undefined;
    padding?: string | undefined;
    border?: string | undefined;
    borderRadius?: string | undefined;
    gap?: string | undefined;
} & {
    onClick?: any;
}, never>;
export default function PortfolioRow({ ["data-testid"]: testId, left, title, descriptor, right, onClick, }: {
    "data-testid"?: string;
    left: React.ReactNode;
    title: React.ReactNode;
    descriptor?: React.ReactNode;
    right?: React.ReactNode;
    setIsHover?: (b: boolean) => void;
    onClick?: () => void;
}): JSX.Element;
export declare function PortfolioSkeleton({ shrinkRight, }: {
    shrinkRight?: boolean;
}): JSX.Element;
export declare const portfolioFadeInAnimation: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const PortfolioTabWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
