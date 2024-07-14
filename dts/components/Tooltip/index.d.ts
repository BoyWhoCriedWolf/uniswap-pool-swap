import { PropsWithChildren, ReactNode } from "react";
import { PopoverProps } from "../Popover";
export declare enum TooltipSize {
    ExtraSmall = "200px",
    Small = "256px",
    Large = "400px"
}
type TooltipProps = Omit<PopoverProps, "content"> & {
    text: ReactNode;
    open?: () => void;
    close?: () => void;
    size?: TooltipSize;
    disabled?: boolean;
    timeout?: number;
};
export default function Tooltip({ text, open, close, disabled, size, ...rest }: TooltipProps): JSX.Element;
type MouseoverTooltipProps = Omit<PopoverProps, "content" | "show"> & PropsWithChildren<{
    text: ReactNode;
    size?: TooltipSize;
    disabled?: boolean;
    timeout?: number;
    placement?: PopoverProps["placement"];
    onOpen?: () => void;
    forceShow?: boolean;
}>;
export declare function MouseoverTooltip(props: MouseoverTooltipProps): JSX.Element;
export {};
