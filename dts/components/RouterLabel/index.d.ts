/// <reference types="react" />
import { SubmittableTrade } from "state/routing/types";
import { DefaultTheme } from "styled-components";
export default function RouterLabel({ trade, color, }: {
    trade: SubmittableTrade;
    color?: keyof DefaultTheme;
}): JSX.Element;
