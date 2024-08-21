/// <reference types="react" />
interface BodyWrapperProps {
    $margin?: string;
    $maxWidth?: string;
}
export declare const BodyWrapper: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, BodyWrapperProps, never>;
interface AddLiquidityProps {
    currencyIdA?: string;
    currencyIdB?: string;
    feeAmount?: string;
    tokenId?: string;
    onClose?: () => void;
}
export default function AddLiquidityWrapper({ currencyIdA, currencyIdB, feeAmount, tokenId, onClose, }?: AddLiquidityProps): JSX.Element;
export {};
