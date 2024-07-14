export declare function useSubscribeScrollState(): {
    scrollRef: (node: HTMLDivElement) => void;
    scrollHandler: (event: React.UIEvent<HTMLDivElement>) => void;
    scrollProgress: number;
    userCanScroll: boolean;
};
