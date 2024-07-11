/// <reference types="react" />
export declare enum UniconAttributes {
    GradientStart = 0,
    GradientEnd = 1,
    Container = 2,
    Shape = 3
}
export declare const UniconAttributesArray: UniconAttributes[];
export interface UniconAttributesToIndices {
    [UniconAttributes.GradientStart]: number;
    [UniconAttributes.GradientEnd]: number;
    [UniconAttributes.Container]: number;
    [UniconAttributes.Shape]: number;
}
export interface UniconAttributeData {
    [UniconAttributes.GradientStart]: string;
    [UniconAttributes.GradientEnd]: string;
    [UniconAttributes.Container]: React.SVGProps<SVGPathElement>[];
    [UniconAttributes.Shape]: React.SVGProps<SVGPathElement>[];
}
export declare const gradientStarts: string[];
export declare const blurs: string[];
export declare const gradientEnds: string[];
export declare const UniconNumOptions: {
    0: number;
    1: number;
    2: number;
    3: number;
};
