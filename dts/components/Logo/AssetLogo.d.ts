import React from "react";
export declare const MissingImageLogo: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size?: string | undefined;
}, never>;
export type AssetLogoBaseProps = {
    symbol?: string | null;
    backupImg?: string | null;
    size?: string;
    style?: React.CSSProperties;
    hideL2Icon?: boolean;
};
type AssetLogoProps = AssetLogoBaseProps & {
    isNative?: boolean;
    address?: string | null;
    chainId?: number;
};
/**
 * Renders an image by prioritizing a list of sources, and then eventually a fallback triangle alert
 */
export default function AssetLogo({ isNative, address, chainId, symbol, backupImg, size, style, hideL2Icon, }: AssetLogoProps): JSX.Element;
export {};
