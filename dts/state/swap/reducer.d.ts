import { Field } from "./actions";
export interface SwapState {
    readonly independentField: Field;
    readonly typedValue: string;
    readonly [Field.INPUT]: {
        readonly currencyId?: string | null;
    };
    readonly [Field.OUTPUT]: {
        readonly currencyId?: string | null;
    };
    readonly recipient: string | null;
}
export declare const initialState: SwapState;
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<SwapState>;
export default _default;
