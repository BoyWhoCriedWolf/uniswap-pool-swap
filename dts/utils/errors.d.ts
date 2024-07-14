export declare class UserRejectedRequestError extends Error {
    constructor(message: string);
}
export declare function toReadableError(errorText: string, error: unknown): Error;
export declare class WrongChainError extends Error {
    constructor();
}
export declare class SignatureExpiredError extends Error {
    private _id;
    constructor();
    get id(): string;
}
