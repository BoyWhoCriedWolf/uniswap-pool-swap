import { SpanStatusType } from "@sentry/tracing";
type TraceTags = Record<string, never>;
interface TraceMetadata {
    /** Arbitrary data stored on a trace. */
    data?: Record<string, unknown>;
    /** Indexed (ie searchable) tags associated with a trace. */
    tags?: Partial<TraceTags>;
}
interface TraceCallbackOptions {
    /**
     * Traces the callback as a child of the active trace.
     * @param name - The name of the child. (On Sentry, this will appear as the "op".)
     * @param callback - The callback to trace. The child trace will run for the duration of the callback.
     * @param metadata - Any data or tags to include in the child trace.
     */
    traceChild<T>(name: string, callback: TraceCallback<T>, metadata?: TraceMetadata): Promise<T>;
    setTraceData(key: string, value: unknown): void;
    setTraceTag<K extends keyof TraceTags>(key: K, value: TraceTags[K]): void;
    /**
     * Sets the status of a trace. If unset, the status will be set to 'ok' (or 'internal_error' if the callback throws).
     * @param status - If a number is passed, the corresponding http status will be used.
     */
    setTraceStatus(status: number | SpanStatusType): void;
    /** Sets the error data of a trace. If unset and the callback throws, the thrown error will be set. */
    setTraceError(error: unknown): void;
}
type TraceCallback<T> = (options: TraceCallbackOptions) => Promise<T>;
/**
 * Traces the callback, adding any metadata to the trace.
 * @param name - The name of your trace.
 * @param callback - The callback to trace. The trace will run for the duration of the callback.
 * @param metadata - Any data or tags to include in the trace.
 */
export declare function trace<T>(name: string, callback: TraceCallback<T>, metadata?: TraceMetadata): Promise<T>;
export {};
