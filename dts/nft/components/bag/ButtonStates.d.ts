import { PriceImpact } from "nft/hooks/usePriceImpact";
import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum BuyButtonStates {
    WALLET_NOT_CONNECTED = 0,
    NOT_SUPPORTED_CHAIN = 1,
    INSUFFICIENT_BALANCE = 2,
    ERROR = 3,
    IN_WALLET_CONFIRMATION = 4,
    PROCESSING_TRANSACTION = 5,
    FETCHING_TOKEN_ROUTE = 6,
    INVALID_TOKEN_ROUTE = 7,
    NO_TOKEN_ROUTE_FOUND = 8,
    LOADING_ALLOWANCE = 9,
    IN_WALLET_ALLOWANCE_APPROVAL = 10,
    PROCESSING_APPROVAL = 11,
    REQUIRE_APPROVAL = 12,
    CONFIRM_UPDATED_PRICE = 13,
    PRICE_IMPACT_HIGH = 14,
    PAY = 15
}
export interface BuyButtonStateData {
    handleClick: (() => void) | (() => Promise<void>);
    buttonText: ReactNode;
    disabled: boolean;
    warningText?: ReactNode;
    warningTextColor: string;
    helperText?: ReactNode;
    helperTextColor: string;
    buttonColor: string;
    buttonTextColor: string;
}
export declare function getBuyButtonStateData(buyButtonState: BuyButtonStates, theme: DefaultTheme, handleClickOverride?: (() => void) | (() => Promise<void>), usingPayWithAnyToken?: boolean, priceImpact?: PriceImpact): BuyButtonStateData;
