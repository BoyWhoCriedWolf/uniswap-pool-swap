import { ClassValue } from "clsx";
import * as React from "react";
import { Atoms } from "../css/atoms";
type HTMLProperties<T = HTMLElement> = Omit<React.AllHTMLAttributes<T>, "as" | "className" | "color" | "height" | "width">;
export declare const Box: React.ForwardRefExoticComponent<Atoms & HTMLProperties<HTMLElement> & {
    as?: React.ElementType<any> | undefined;
    className?: ClassValue;
} & React.RefAttributes<HTMLElement>>;
export declare const AnimatedBox: any;
export type BoxProps = Parameters<typeof Box>[0];
export {};
