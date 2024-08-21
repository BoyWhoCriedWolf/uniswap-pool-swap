/// <reference types="react" />
import { sendAnalyticsEvent as sendAnalyticsTraceEvent } from '@uniswap/analytics';
export declare const allowAnalyticsAtom: import("jotai").PrimitiveAtom<boolean>;
export declare const TraceEvent: import("react").NamedExoticComponent<{
    events: string[];
    name: string;
    properties?: Record<string, unknown> | undefined;
    shouldLogImpression?: boolean | undefined;
} & import("@uniswap/analytics").ITraceContext & {
    children?: import("react").ReactNode;
}>;
export declare const sendAnalyticsEvent: typeof sendAnalyticsTraceEvent;
