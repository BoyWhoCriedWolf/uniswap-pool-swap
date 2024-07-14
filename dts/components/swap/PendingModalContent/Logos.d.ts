/// <reference types="react" />
import { Currency } from "@uniswap/sdk-core";
export declare const LogoContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare enum AnimationType {
    EXITING = "exiting"
}
export declare function FadePresence({ children, className, $scale, ...rest }: {
    children: React.ReactNode;
    className?: string;
    $scale?: boolean;
}): JSX.Element;
export declare function CurrencyLoader({ currency, asBadge, }: {
    currency?: Currency;
    asBadge?: boolean;
}): JSX.Element;
export declare function PaperIcon(): JSX.Element;
export declare function LoadingIndicatorOverlay(): JSX.Element;
declare function ConfirmedIcon({ className }: {
    className?: string;
}): JSX.Element;
declare function SubmittedIcon({ className }: {
    className?: string;
}): JSX.Element;
export declare const AnimatedEntranceConfirmationIcon: import("styled-components").StyledComponent<typeof ConfirmedIcon, import("styled-components").DefaultTheme, {}, never>;
export declare const AnimatedEntranceSubmittedIcon: import("styled-components").StyledComponent<typeof SubmittedIcon, import("styled-components").DefaultTheme, {}, never>;
export {};
