import { ITraceContext } from "analytics";
import { INTERNAL_ROUTER_PREFERENCE_PRICE, RouterPreference } from "state/routing/types";
export declare function logSwapSuccess(hash: string, chainId: number, analyticsContext: ITraceContext): void;
export declare function maybeLogFirstSwapAction(analyticsContext: ITraceContext): void;
export declare function logSwapQuoteRequest(chainId: number, routerPreference: RouterPreference | typeof INTERNAL_ROUTER_PREFERENCE_PRICE, isQuickRoute?: boolean): void;
