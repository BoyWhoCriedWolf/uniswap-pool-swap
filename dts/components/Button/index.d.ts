/// <reference types="react" />
import { ButtonProps as ButtonPropsOriginal } from "rebass/styled-components";
import { DefaultTheme } from "styled-components";
export { default as LoadingButtonSpinner } from "./LoadingButtonSpinner";
type ButtonProps = Omit<ButtonPropsOriginal, "css">;
type BaseButtonProps = {
    padding?: string;
    width?: string;
    $borderRadius?: string;
    altDisabledStyle?: boolean;
} & ButtonProps;
export declare const BaseButton: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const ButtonPrimary: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const SmallButtonPrimary: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const ButtonGray: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const ButtonSecondary: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const ButtonOutlined: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const ButtonEmpty: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare const ButtonText: import("styled-components").StyledComponent<"button", DefaultTheme, {
    padding?: string | undefined;
    width?: string | undefined;
    $borderRadius?: string | undefined;
    altDisabledStyle?: boolean | undefined;
} & ButtonProps, never>;
export declare function ButtonConfirmed({ confirmed, altDisabledStyle, ...rest }: {
    confirmed?: boolean;
    altDisabledStyle?: boolean;
} & ButtonProps): JSX.Element;
export declare function ButtonError({ error, ...rest }: {
    error?: boolean;
} & BaseButtonProps): JSX.Element;
export declare function ButtonDropdown({ disabled, children, ...rest }: {
    disabled?: boolean;
} & ButtonProps): JSX.Element;
export declare function ButtonDropdownLight({ disabled, children, ...rest }: {
    disabled?: boolean;
} & ButtonProps): JSX.Element;
export declare function ButtonRadioChecked({ active, children, ...rest }: {
    active?: boolean;
} & ButtonProps): JSX.Element;
export declare enum ButtonSize {
    small = 0,
    medium = 1,
    large = 2
}
export declare enum ButtonEmphasis {
    high = 0,
    promotional = 1,
    highSoft = 2,
    medium = 3,
    low = 4,
    warning = 5,
    destructive = 6,
    failure = 7
}
interface BaseThemeButtonProps {
    size: ButtonSize;
    emphasis: ButtonEmphasis;
}
export interface ThemeButtonProps extends React.ComponentPropsWithoutRef<"button">, BaseThemeButtonProps {
}
export declare const ThemeButton: import("react").ForwardRefExoticComponent<ThemeButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ButtonLight: ({ children, ...rest }: BaseButtonProps) => JSX.Element;
