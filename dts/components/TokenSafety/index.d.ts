/// <reference types="react" />
export interface TokenSafetyProps {
    tokenAddress: string | null;
    secondTokenAddress?: string;
    onContinue: () => void;
    onCancel: () => void;
    onBlocked?: () => void;
    showCancel?: boolean;
}
export default function TokenSafety({ tokenAddress, secondTokenAddress, onContinue, onCancel, onBlocked, showCancel, }: TokenSafetyProps): JSX.Element;
