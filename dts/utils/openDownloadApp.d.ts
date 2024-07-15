import { InterfaceElementName } from "@uniswap/analytics-events";
type OpenDownloadAppOptions = {
    element?: InterfaceElementName;
    appStoreParams?: string;
    microSiteParams?: string;
};
/**
 * Note: openDownloadApp and getDownloadAppLink are equivalent functions, the first just runs imperatively
 * and adds an analytics event, where the other only returns a link. Typically you'll use both:
 *
 * <a href={getDownloadAppLink(options)} onClick={() => openDownloadApp(options)} />
 *
 * This way with JS disabled and when hovering the <a /> you see and nav to the full href properly,
 * but with JS on it will send the analytics event before navigating to the href.
 *
 * I've added a helper `getDownloadAppLinkProps` that unifies this behavior into one thing.
 */
export declare function openDownloadApp(options?: OpenDownloadAppOptions): void;
export declare const getDownloadAppLink: (options?: OpenDownloadAppOptions) => string;
export declare const getDownloadAppLinkProps: (options?: OpenDownloadAppOptions) => {
    href: string;
    onClick(e: {
        preventDefault: () => void;
    }): void;
};
type AnalyticsLinkOptions = {
    element?: InterfaceElementName;
    urlParamString?: string;
};
export declare const openWalletMicrosite: (options?: AnalyticsLinkOptions) => void;
export {};
