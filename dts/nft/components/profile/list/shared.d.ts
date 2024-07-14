/// <reference types="react" />
export declare const RemoveIconWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    hovered: boolean;
}, never>;
export declare const TitleRow: import("styled-components").StyledComponent<import("react").FunctionComponent<import("rebass").BoxProps>, import("styled-components").DefaultTheme, {
    width?: string | undefined;
    align?: string | undefined;
    justify?: string | undefined;
    padding?: string | undefined;
    border?: string | undefined;
    borderRadius?: string | undefined;
    gap?: string | undefined;
}, never>;
export declare enum SetPriceMethod {
    SAME_PRICE = 0,
    FLOOR_PRICE = 1,
    LAST_PRICE = 2,
    CUSTOM = 3
}
export declare enum WarningType {
    BELOW_FLOOR = 0,
    ALREADY_LISTED = 1,
    NONE = 2
}
