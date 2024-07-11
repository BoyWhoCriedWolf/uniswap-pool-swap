/// <reference types="react" />
export default function AuthenticatedHeader({ account, openSettings, onShowNftProfile, }: {
    account: string;
    openSettings: () => void;
    onShowNftProfile?: () => void;
}): JSX.Element;
