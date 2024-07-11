/** Thrown if the function is canceled before resolving. */
export declare class CanceledError extends Error {
    name: string;
    message: string;
}
/** May be thrown to force a retry. */
export declare class RetryableError extends Error {
    name: string;
}
export interface RetryOptions {
    n: number;
    minWait: number;
    maxWait: number;
}
/**
 * Retries a function until its returned promise successfully resolves, up to n times.
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
export declare function retry<T>(fn: () => Promise<T>, { n, minWait, maxWait }: RetryOptions): {
    promise: Promise<T>;
    cancel: () => void;
};
