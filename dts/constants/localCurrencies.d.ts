import { Currency } from "graphql/data/__generated__/types-and-hooks";
import { ReactNode } from "react";
export declare const SUPPORTED_LOCAL_CURRENCIES: readonly [Currency.Usd, Currency.Aud, Currency.Brl, Currency.Cad, Currency.Eur, Currency.Gbp, Currency.Hkd, Currency.Idr, Currency.Inr, Currency.Jpy, Currency.Ngn, Currency.Pkr, Currency.Rub, Currency.Sgd, Currency.Thb, Currency.Try, Currency.Uah, Currency.Vnd];
export type SupportedLocalCurrency = (typeof SUPPORTED_LOCAL_CURRENCIES)[number];
export declare const DEFAULT_LOCAL_CURRENCY: SupportedLocalCurrency;
export declare const LOCAL_CURRENCY_SYMBOL_DISPLAY_TYPE: Record<SupportedLocalCurrency, "narrowSymbol" | "symbol">;
export declare function getLocalCurrencyIcon(localCurrency: SupportedLocalCurrency, size?: number): ReactNode;
