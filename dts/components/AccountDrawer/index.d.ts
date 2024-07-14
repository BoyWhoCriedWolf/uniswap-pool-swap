/// <reference types="react" />
export declare function useToggleAccountDrawer(): () => void;
export declare function useCloseAccountDrawer(): () => void;
export declare function useAccountDrawer(): [boolean, () => void];
interface ScrimBackgroundProps extends React.ComponentPropsWithRef<"div"> {
    $open: boolean;
}
export declare const Scrim: (props: ScrimBackgroundProps) => JSX.Element;
declare function AccountDrawer({ onShowNftProfile, }?: {
    onShowNftProfile?: () => void;
}): JSX.Element;
export default AccountDrawer;
