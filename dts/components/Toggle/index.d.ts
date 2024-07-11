/// <reference types="react" />
interface ToggleProps {
    id?: string;
    bgColor?: string;
    isActive: boolean;
    toggle: () => void;
}
export default function Toggle({ id, bgColor, isActive, toggle }: ToggleProps): JSX.Element;
export {};
