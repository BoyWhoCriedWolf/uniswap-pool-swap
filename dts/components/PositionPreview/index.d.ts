import { Currency } from '@uniswap/sdk-core';
import { Position } from '@uniswap/v3-sdk';
import { ReactNode } from 'react';
export declare const Break: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare function PositionPreview({ position, title, inRange, baseCurrencyDefault, ticksAtLimit, }: {
    position: Position;
    title?: ReactNode;
    inRange: boolean;
    baseCurrencyDefault?: Currency;
    ticksAtLimit: {
        [bound: string]: boolean | undefined;
    };
}): JSX.Element;
