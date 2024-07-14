import { UniformAspectRatio } from "nft/types";
import { ReactNode } from "react";
export declare const MediaContainer: ({ isDisabled, children, }: {
    isDisabled: boolean;
    children: ReactNode;
}) => JSX.Element;
interface ImageProps {
    src?: string;
    uniformAspectRatio?: UniformAspectRatio;
    setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void;
    renderedHeight?: number;
    setRenderedHeight?: (renderedHeight: number | undefined) => void;
}
export declare const StyledImage: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {
    imageLoading: boolean;
    $aspectRatio?: string | undefined;
    $hidden?: boolean | undefined;
}, never>;
export declare const NftImage: ({ src, uniformAspectRatio, setUniformAspectRatio, renderedHeight, setRenderedHeight, }: ImageProps) => JSX.Element;
interface MediaProps {
    isAudio?: boolean;
    mediaSrc?: string;
    tokenId?: string;
    shouldPlay: boolean;
    setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void;
}
export declare const NftPlayableMedia: ({ isAudio, src, mediaSrc, tokenId, uniformAspectRatio, setUniformAspectRatio, renderedHeight, setRenderedHeight, shouldPlay, setCurrentTokenPlayingMedia, }: MediaProps & ImageProps) => JSX.Element;
export {};
