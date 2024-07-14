import { Percent } from "@uniswap/sdk-core";
import { ReactNode } from "react";
export declare function FindPoolTabs({ origin }: {
    origin: string;
}): JSX.Element;
export declare function AddRemoveTabs({ adding, creating, autoSlippage, onBack, children, }: {
    adding: boolean;
    creating: boolean;
    autoSlippage: Percent;
    positionID?: string;
    showBackLink?: boolean;
    onBack?: () => void;
    children?: ReactNode;
}): JSX.Element;
