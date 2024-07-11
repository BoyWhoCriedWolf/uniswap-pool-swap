/// <reference types="react" />
export default function SettingsMenu({ onClose, openLanguageSettings, openLocalCurrencySettings, }: {
    onClose: () => void;
    openLanguageSettings: () => void;
    openLocalCurrencySettings: () => void;
}): JSX.Element;
