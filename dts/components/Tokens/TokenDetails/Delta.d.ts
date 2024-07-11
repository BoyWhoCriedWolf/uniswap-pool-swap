/// <reference types="react" />
export declare function calculateDelta(start: number, current: number): number;
interface DeltaArrowProps {
    delta?: number | null;
    noColor?: boolean;
    size?: number;
}
export declare function DeltaArrow({ delta, noColor, size, }: DeltaArrowProps): JSX.Element | null;
export declare const DeltaText: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
    delta?: number | undefined;
}, never>;
export {};
