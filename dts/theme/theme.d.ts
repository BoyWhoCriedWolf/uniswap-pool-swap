export interface Colors {
    accent: string;
    accentSoft: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    scrim: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    activeSoft: string;
    success: string;
    warning: string;
    warningSoft: string;
    error: string;
    critical: string;
    criticalSoft: string;
    networkDefaultShadow: string;
    deepShadow: string;
    currentColor: 'currentColor';
}
export declare type Color = keyof Colors;
export declare type ThemeBorderRadius = {
    large: number;
    medium: number;
    small: number;
    xsmall: number;
};
export declare type ZIndex = {
    modal: number;
};
export interface Attributes {
    borderRadius: ThemeBorderRadius;
    zIndex: ZIndex;
    fontFamily: string | {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
}
export interface Theme extends Partial<Attributes>, Partial<Colors> {
}
