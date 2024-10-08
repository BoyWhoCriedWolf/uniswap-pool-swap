import { Component, ErrorInfo, PropsWithChildren } from 'react';
export declare type OnError = (error: Error, info?: ErrorInfo) => void;
interface ErrorBoundaryProps {
    onError?: OnError;
}
declare type ErrorBoundaryState = {
    error?: Error;
};
/**
 * Throws an error from outside of the React lifecycle.
 * Errors thrown through this method will correctly trigger the ErrorBoundary.
 *
 * @example
 * const throwError = useAsyncError()
 * useEffect(() => {
 *   fetch('http://example.com')
 *     .catch((e: Error) => {
 *       throwError(toWidgetError(e))
 *     })
 * }, [throwError])
 */
export declare function useAsyncError(): (error: unknown) => void;
export default class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    renderErrorView(error: Error): JSX.Element;
    render(): string | number | boolean | import("react").ReactFragment | JSX.Element | null | undefined;
}
export {};
