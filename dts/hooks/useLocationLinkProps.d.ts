import { SupportedLocale } from "constants/locales";
import type { To } from "react-router-dom";
export declare function useLocationLinkProps(locale: SupportedLocale | null): {
    to?: To;
    onClick?: () => void;
};
