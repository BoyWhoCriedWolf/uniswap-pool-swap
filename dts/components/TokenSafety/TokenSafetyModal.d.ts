/// <reference types="react" />
import { TokenSafetyProps } from "./index";
interface TokenSafetyModalProps extends TokenSafetyProps {
    isOpen: boolean;
}
export default function TokenSafetyModal({ isOpen, tokenAddress, secondTokenAddress, onContinue, onCancel, onBlocked, showCancel, }: TokenSafetyModalProps): JSX.Element;
export {};
