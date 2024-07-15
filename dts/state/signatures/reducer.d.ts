import { SignatureDetails } from "./types";
export interface SignatureState {
    [account: string]: {
        [id: string]: SignatureDetails;
    };
}
export declare const initialState: SignatureState;
export declare const addSignature: import("@reduxjs/toolkit").ActionCreatorWithPayload<import("./types").UniswapXOrderDetails, "signatures/addSignature">, updateSignature: import("@reduxjs/toolkit").ActionCreatorWithPayload<import("./types").UniswapXOrderDetails, "signatures/updateSignature">, removeSignature: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    offerer: string;
    id: string;
}, "signatures/removeSignature">;
declare const _default: import("redux").Reducer<SignatureState, import("redux").AnyAction>;
export default _default;
