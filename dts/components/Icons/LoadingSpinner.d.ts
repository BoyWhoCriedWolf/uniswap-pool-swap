/// <reference types="react" />
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export default function Loader({ size, stroke, strokeWidth, ...rest }: {
    size?: string;
    stroke?: string;
    strokeWidth?: number;
    [k: string]: any;
}): JSX.Element;
export declare function LoaderV2(): JSX.Element;
export declare function LoaderV3({ size, color, ...rest }: {
    size?: string;
    color?: string;
    [k: string]: any;
}): JSX.Element;
