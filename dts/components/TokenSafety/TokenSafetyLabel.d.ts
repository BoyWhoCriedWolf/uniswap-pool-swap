import { WARNING_LEVEL } from "constants/tokenSafety";
import { ReactNode } from "react";
type TokenWarningLabelProps = {
    level: WARNING_LEVEL;
    canProceed: boolean;
    children: ReactNode;
};
export default function TokenSafetyLabel({ level, canProceed, children, }: TokenWarningLabelProps): JSX.Element;
export {};
