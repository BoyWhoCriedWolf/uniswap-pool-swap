import { ProfilePageStateType } from "../types";
interface profilePageState {
    /**
     * State of user settings
     */
    state: ProfilePageStateType;
    setProfilePageState: (state: ProfilePageStateType) => void;
}
export declare const useProfilePageState: import("zustand/traditional").UseBoundStoreWithEqualityFn<Omit<import("zustand").StoreApi<profilePageState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: profilePageState | Partial<profilePageState> | ((state: profilePageState) => profilePageState | Partial<profilePageState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
