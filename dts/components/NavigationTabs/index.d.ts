import { Percent } from '@uniswap/sdk-core';
import { ReactNode } from 'react';
export declare function AddRemoveTabs({ adding, creating, autoSlippage, positionID, children, }: {
    adding: boolean;
    creating: boolean;
    autoSlippage: Percent;
    positionID?: string;
    showBackLink?: boolean;
    children?: ReactNode;
}): JSX.Element;
