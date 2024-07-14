import { ReactNode } from "react";
import type { To } from "react-router-dom";
export declare const MenuColumn: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    gap?: "sm" | "md" | "lg" | "xl" | "xs" | undefined;
}, never>;
export declare function MenuItem({ label, logo, to, onClick, isActive, testId, }: {
    label: ReactNode;
    logo?: ReactNode;
    to?: To;
    onClick?: () => void;
    isActive: boolean;
    testId?: string;
}): JSX.Element | null;
