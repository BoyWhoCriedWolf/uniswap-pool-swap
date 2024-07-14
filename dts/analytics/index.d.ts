/// <reference types="react" />
import { sendAnalyticsEvent as sendAnalyticsTraceEvent, Trace as AnalyticsTrace, TraceEvent as AnalyticsEvent } from '@uniswap/analytics';
export { type ITraceContext, getDeviceId, initializeAnalytics, OriginApplication, user, useTrace, } from '@uniswap/analytics';
export declare const allowAnalyticsAtom: import("jotai").PrimitiveAtom<boolean>;
export declare const Trace: import("react").MemoExoticComponent<(props: React.ComponentProps<typeof AnalyticsTrace>) => JSX.Element>;
export declare const TraceEvent: import("react").MemoExoticComponent<(props: React.ComponentProps<typeof AnalyticsEvent>) => JSX.Element>;
export declare const sendAnalyticsEvent: typeof sendAnalyticsTraceEvent;
export declare const sendInitializationEvent: typeof sendAnalyticsTraceEvent;
