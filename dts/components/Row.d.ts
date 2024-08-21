import { ReactNode } from 'react';
import { Color, Gap, Theme } from 'theme';
export interface RowProps {
    color?: Color;
    align?: string;
    justify?: string;
    justifyContent?: string;
    flow?: string;
    pad?: number;
    gap?: number | Gap | string;
    flex?: true;
    grow?: true | 'first' | 'last';
    children?: ReactNode;
    theme: Theme;
    paddingBottom?: string;
}
declare const Row: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps, never>;
export declare const RowBetween: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps, never>;
export declare const RowFlat: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const AutoRow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps & {
    gap?: string | undefined;
    justify?: string | undefined;
}, never>;
export declare const RowFixed: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps & {
    gap?: string | undefined;
    justify?: string | undefined;
}, never>;
export default Row;
