import { ReactNode } from 'react';
export declare enum Currency {
    Aud = "AUD",
    Brl = "BRL",
    Cad = "CAD",
    Cny = "CNY",
    Eth = "ETH",
    Eur = "EUR",
    Gbp = "GBP",
    Hkd = "HKD",
    Idr = "IDR",
    Inr = "INR",
    Jpy = "JPY",
    Matic = "MATIC",
    Ngn = "NGN",
    Pkr = "PKR",
    Rub = "RUB",
    Sgd = "SGD",
    Thb = "THB",
    Try = "TRY",
    Uah = "UAH",
    Usd = "USD",
    Vnd = "VND"
}
export declare const SUPPORTED_LOCAL_CURRENCIES: readonly [Currency.Usd, Currency.Aud, Currency.Brl, Currency.Cad, Currency.Eur, Currency.Gbp, Currency.Hkd, Currency.Idr, Currency.Inr, Currency.Jpy, Currency.Ngn, Currency.Pkr, Currency.Rub, Currency.Sgd, Currency.Thb, Currency.Try, Currency.Uah, Currency.Vnd];
export declare type SupportedLocalCurrency = typeof SUPPORTED_LOCAL_CURRENCIES[number];
export declare const DEFAULT_LOCAL_CURRENCY: SupportedLocalCurrency;
export declare const LOCAL_CURRENCY_SYMBOL_DISPLAY_TYPE: Record<SupportedLocalCurrency, 'narrowSymbol' | 'symbol'>;
export declare function getLocalCurrencyIcon(localCurrency: SupportedLocalCurrency, size?: number): ReactNode;
