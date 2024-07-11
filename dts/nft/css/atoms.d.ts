/// <reference types="react" />
import { Sprinkles } from "./sprinkles.css";
export interface Atoms extends Sprinkles {
    reset?: keyof JSX.IntrinsicElements;
}
export declare const atoms: ({ reset, ...rest }: Atoms) => string;
