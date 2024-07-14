/// <reference types="react" />
interface SettingsToggleProps {
    title: string;
    description?: string;
    dataid?: string;
    isActive: boolean;
    toggle: () => void;
}
export declare function SettingsToggle({ title, description, dataid, isActive, toggle, }: SettingsToggleProps): JSX.Element;
export {};
