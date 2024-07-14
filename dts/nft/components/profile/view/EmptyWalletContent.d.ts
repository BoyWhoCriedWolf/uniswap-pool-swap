/// <reference types="react" />
type EmptyWalletContentType = "nft" | "token" | "activity" | "pool";
interface EmptyWalletContentProps {
    type?: EmptyWalletContentType;
    onNavigateClick?: (v?: string) => void;
    onOpen?: (v?: string) => void;
}
export declare const EmptyWalletModule: (props?: EmptyWalletContentProps) => JSX.Element;
export {};
