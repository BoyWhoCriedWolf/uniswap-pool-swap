/// <reference types="react" />
/**
 * Generates an SVG path for the east brush handle.
 * Apply `scale(-1, 1)` to generate west brush handle.
 *
 *    |```````\
 *    |  | |  |
 *    |______/
 *    |
 *    |
 *    |
 *    |
 *    |
 *
 * https://medium.com/@dennismphil/one-side-rounded-rectangle-using-svg-fb31cf318d90
 */
export declare const brushHandlePath: (height: number) => string;
export declare const brushHandleAccentPath: () => string;
export declare const OffScreenHandle: ({ color, size, margin, }: {
    color: string;
    size?: number | undefined;
    margin?: number | undefined;
}) => JSX.Element;
