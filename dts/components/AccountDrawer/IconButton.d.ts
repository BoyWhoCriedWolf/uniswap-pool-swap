import React from "react";
import { Icon } from "react-feather";
import { DefaultTheme } from "styled-components";
export declare const IconHoverText: import("styled-components").StyledComponent<"span", DefaultTheme, {}, never>;
interface BaseProps {
    Icon: Icon;
    hideHorizontal?: boolean;
    children?: React.ReactNode;
}
interface IconLinkProps extends React.ComponentPropsWithoutRef<"a">, BaseProps {
}
interface IconButtonProps extends React.ComponentPropsWithoutRef<"button">, BaseProps {
}
declare const IconButton: ({ Icon, ...rest }: IconButtonProps | IconLinkProps) => JSX.Element;
type IconWithTextProps = (IconButtonProps | IconLinkProps) & {
    text: string;
    onConfirm?: () => void;
    onShowConfirm?: (on: boolean) => void;
    dismissOnHoverOut?: boolean;
    dismissOnHoverDurationMs?: number;
};
/**
 * Allows for hiding and showing some text next to an IconButton
 * Note that for width transitions to animate in CSS we need to always specify the width (no auto)
 * so there's resize observing and measuring going on here.
 */
export declare const IconWithConfirmTextButton: ({ Icon, text, onConfirm, onShowConfirm, onClick, dismissOnHoverOut, dismissOnHoverDurationMs, ...rest }: IconWithTextProps) => JSX.Element;
export default IconButton;
