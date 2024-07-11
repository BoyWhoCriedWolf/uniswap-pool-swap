/**
 * Preset styles of the Rebass Text component
 */
/// <reference types="react" />
import { TextProps as TextPropsOriginal } from "rebass";
type TextProps = Omit<TextPropsOriginal, "css">;
export declare const ThemedText: {
    BodyPrimary(props: TextProps): JSX.Element;
    BodySecondary(props: TextProps): JSX.Element;
    BodySmall(props: TextProps): JSX.Element;
    HeadlineSmall(props: TextProps): JSX.Element;
    HeadlineMedium(props: TextProps): JSX.Element;
    HeadlineLarge(props: TextProps): JSX.Element;
    LargeHeader(props: TextProps): JSX.Element;
    Hero(props: TextProps): JSX.Element;
    LabelSmall(props: TextProps): JSX.Element;
    LabelMicro(props: TextProps): JSX.Element;
    Caption(props: TextProps): JSX.Element;
    Link(props: TextProps): JSX.Element;
    MediumHeader(props: TextProps): JSX.Element;
    SubHeaderLarge(props: TextProps): JSX.Element;
    SubHeader(props: TextProps): JSX.Element;
    SubHeaderSmall(props: TextProps): JSX.Element;
    UtilityBadge(props: TextProps): JSX.Element;
    DeprecatedMain(props: TextProps): JSX.Element;
    DeprecatedLink(props: TextProps): JSX.Element;
    DeprecatedLabel(props: TextProps): JSX.Element;
    DeprecatedBlack(props: TextProps): JSX.Element;
    DeprecatedWhite(props: TextProps): JSX.Element;
    DeprecatedBody(props: TextProps): JSX.Element;
    DeprecatedLargeHeader(props: TextProps): JSX.Element;
    DeprecatedMediumHeader(props: TextProps): JSX.Element;
    DeprecatedSubHeader(props: TextProps): JSX.Element;
    DeprecatedSmall(props: TextProps): JSX.Element;
    DeprecatedBlue(props: TextProps): JSX.Element;
    DeprecatedYellow(props: TextProps): JSX.Element;
    DeprecatedDarkGray(props: TextProps): JSX.Element;
    DeprecatedGray(props: TextProps): JSX.Element;
    DeprecatedItalic(props: TextProps): JSX.Element;
    DeprecatedError({ error, ...props }: {
        error: boolean;
    } & TextProps): JSX.Element;
};
export {};
