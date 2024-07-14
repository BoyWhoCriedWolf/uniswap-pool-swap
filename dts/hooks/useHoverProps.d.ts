export default function useHoverProps(): [
    boolean,
    {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    }
];
