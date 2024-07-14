export declare const SUPPORTED_LOCALES: string[];
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export declare const DEFAULT_LOCALE: SupportedLocale;
export { messages as DEFAULT_MESSAGES } from "locales/en-US";
export declare const LOCALE_LABEL: {
    [locale in SupportedLocale]: string;
};