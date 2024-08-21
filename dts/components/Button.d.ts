import { Icon } from 'icons';
import { ComponentProps } from 'react';
import { ButtonProps } from 'rebass';
export declare type BaseButtonProps = {
    padding?: string;
    width?: string;
    $borderRadius?: string;
    altDisabledStyle?: boolean;
};
export declare const BaseButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
declare const _default: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export default _default;
export declare const TextButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
interface IconButtonProps {
    icon: Icon;
    iconProps?: ComponentProps<Icon>;
}
export declare const IconButton: import("react").ForwardRefExoticComponent<(Pick<IconButtonProps & {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
}, string | number | symbol> | Pick<IconButtonProps & {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
}, string | number | symbol>) & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ButtonGray: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
export declare const ButtonOutlined: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
export declare function ButtonRadioChecked({ active, children, ...rest }: {
    active?: boolean;
} & ButtonProps): JSX.Element;
export declare const ButtonEmpty: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
export declare const ButtonPrimary: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
export declare function ButtonConfirmed({ confirmed, altDisabledStyle, ...rest }: {
    confirmed?: boolean;
    altDisabledStyle?: boolean;
} & ButtonProps): JSX.Element;
export declare const SmallButtonPrimary: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
