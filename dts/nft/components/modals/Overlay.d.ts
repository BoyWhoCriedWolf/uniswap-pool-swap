/// <reference types="react" />
interface OverlayProps {
    onClick?: () => void;
}
export declare const stopPropagation: (event: React.SyntheticEvent<HTMLElement>) => void;
export declare const Overlay: ({ onClick }: OverlayProps) => JSX.Element;
export {};
