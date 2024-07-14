import { Placement } from "@popperjs/core";
import React, { CSSProperties } from "react";
export declare const Arrow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export interface PopoverProps {
    content: React.ReactNode;
    show: boolean;
    children?: React.ReactNode;
    placement?: Placement;
    offsetX?: number;
    offsetY?: number;
    hideArrow?: boolean;
    showInline?: boolean;
    style?: CSSProperties;
}
export default function Popover({ content, show, children, placement, offsetX, offsetY, hideArrow, showInline, style, }: PopoverProps): JSX.Element;
