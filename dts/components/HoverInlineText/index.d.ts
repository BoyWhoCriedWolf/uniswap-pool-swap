/// <reference types="react" />
declare function HoverInlineText({ text, maxCharacters, margin, adjustSize, fontSize, textColor, link, ...rest }: {
    text?: string;
    maxCharacters?: number;
    margin?: boolean;
    adjustSize?: boolean;
    fontSize?: string;
    textColor?: string;
    link?: boolean;
}): JSX.Element;
export default HoverInlineText;
