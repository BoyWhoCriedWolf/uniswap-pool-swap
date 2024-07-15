import React, { HTMLProps, PropsWithChildren, ReactNode } from "react";
import { Icon } from "react-feather";
export { ThemedText } from "./text";
export declare const CloseIcon: import("styled-components").StyledComponent<Icon, import("styled-components").DefaultTheme, {
    onClick: () => void;
}, never>;
export declare const LinkStyledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    disabled?: boolean | undefined;
}, never>;
export declare const ButtonText: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const EllipsisStyle: import("styled-components").FlattenSimpleInterpolation;
export declare const ClickableStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const StyledInternalLink: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("react-router-dom").LinkProps & React.RefAttributes<HTMLAnchorElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const UniTokenAnimated: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledRouterLink: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("react-router-dom").LinkProps & React.RefAttributes<HTMLAnchorElement>>, import("styled-components").DefaultTheme, {}, never>;
/**
 * Outbound link that handles firing google analytics events
 */
export declare function ExternalLink({ target, href, rel, ...rest }: Omit<HTMLProps<HTMLAnchorElement>, "as" | "ref" | "onClick"> & {
    href: string;
}): JSX.Element;
export declare function CopyToClipboard({ toCopy, children, }: PropsWithChildren<{
    toCopy: string;
}>): JSX.Element;
export declare function CopyLinkIcon({ toCopy }: {
    toCopy: string;
}): JSX.Element;
export declare function CopyContractAddress({ address }: {
    address: string;
}): JSX.Element;
interface CopyHelperProps {
    InitialIcon?: Icon | null;
    CopiedIcon?: Icon;
    toCopy: string;
    color?: string;
    fontSize?: number;
    iconSize?: number;
    gap?: number;
    iconPosition?: "left" | "right";
    iconColor?: string;
    children: ReactNode;
}
export type CopyHelperRefType = {
    forceCopy: () => void;
};
export declare const CopyHelper: React.ForwardRefExoticComponent<CopyHelperProps & React.RefAttributes<CopyHelperRefType>>;
export declare const SpinnerSVG: import("styled-components").StyledComponent<"svg", import("styled-components").DefaultTheme, {}, never>;
export declare function BackArrowLink({ to }: {
    to: string;
}): JSX.Element;
export declare const CustomLightSpinner: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {
    size: string;
}, never>;
export declare const HideSmall: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const HideExtraSmall: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const SmallOnly: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const MediumOnly: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const Separator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CautionTriangle: import("styled-components").StyledComponent<Icon, import("styled-components").DefaultTheme, {}, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
