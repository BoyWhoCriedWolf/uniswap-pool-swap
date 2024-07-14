/// <reference types="react" />
export declare enum PendingModalError {
    TOKEN_APPROVAL_ERROR = 0,
    PERMIT_ERROR = 1,
    CONFIRMATION_ERROR = 2,
    WRAP_ERROR = 3
}
interface ErrorModalContentProps {
    errorType: PendingModalError;
    onRetry: () => void;
}
export declare function ErrorModalContent({ errorType, onRetry, }: ErrorModalContentProps): JSX.Element;
export {};
