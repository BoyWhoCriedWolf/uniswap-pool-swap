import { css } from 'styled-components/macro';
import { Color } from 'theme';
export interface ColumnProps {
    align?: string;
    color?: Color;
    justify?: string;
    gap?: number;
    padded?: true;
    padding?: string;
    flex?: true;
    grow?: true;
    css?: ReturnType<typeof css>;
}
declare const Column: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ColumnProps, never>;
export declare const AutoColumn: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    gap?: string | undefined;
    justify?: "center" | "start" | "end" | "flex-end" | "flex-start" | "stretch" | "space-between" | undefined;
    grow?: true | undefined;
}, never>;
export default Column;
