import { Field } from "./actions";
export interface MintState {
    readonly independentField: Field;
    readonly typedValue: string;
    readonly otherTypedValue: string;
    readonly startPriceTypedValue: string;
    readonly leftRangeTypedValue: string;
    readonly rightRangeTypedValue: string;
}
export declare const initialState: MintState;
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<MintState>;
export default _default;
