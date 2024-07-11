import { Field } from "./actions";
export type FullRange = true;
export interface MintState {
    readonly independentField: Field;
    readonly typedValue: string;
    readonly startPriceTypedValue: string;
    readonly leftRangeTypedValue: string | FullRange;
    readonly rightRangeTypedValue: string | FullRange;
}
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<MintState>;
export default _default;
