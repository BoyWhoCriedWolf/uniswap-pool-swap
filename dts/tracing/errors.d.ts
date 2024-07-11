import { ClientOptions } from "@sentry/types";
declare global {
    interface PerformanceEntry {
        responseStatus?: number;
    }
}
/**
 * Filters known (ignorable) errors out before sending them to Sentry. Also, adds tags to the event.
 * Intended as a {@link ClientOptions.beforeSend} callback. Returning null filters the error from Sentry.
 */
export declare const beforeSend: Required<ClientOptions>["beforeSend"];
