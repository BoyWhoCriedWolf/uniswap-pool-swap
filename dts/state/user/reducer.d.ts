import { ConnectionType } from "../../connection/types";
import { SupportedLocale } from "../../constants/locales";
import { RouterPreference } from "../../state/routing/types";
import { SerializedPair, SerializedToken, SlippageTolerance } from "./types";
export interface UserState {
    selectedWallet?: ConnectionType;
    lastUpdateVersionTimestamp?: number;
    userLocale: SupportedLocale | null;
    userRouterPreference: RouterPreference;
    userHideClosedPositions: boolean;
    userSlippageTolerance: number | SlippageTolerance.Auto;
    userSlippageToleranceHasBeenMigratedToAuto: boolean;
    userDeadline: number;
    tokens: {
        [chainId: number]: {
            [address: string]: SerializedToken;
        };
    };
    pairs: {
        [chainId: number]: {
            [key: string]: SerializedPair;
        };
    };
    timestamp: number;
    hideBaseWalletBanner: boolean;
    disabledUniswapX?: boolean;
    optedOutOfUniswapX?: boolean;
    showSurveyPopup?: boolean;
    originCountry?: string;
}
export declare const initialState: UserState;
export declare const addSerializedPair: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/addSerializedPair">, addSerializedToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/addSerializedToken">, setOriginCountry: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setOriginCountry">, updateSelectedWallet: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateSelectedWallet">, updateHideClosedPositions: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateHideClosedPositions">, updateUserRouterPreference: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateUserRouterPreference">, updateUserDeadline: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateUserDeadline">, updateUserLocale: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateUserLocale">, updateUserSlippageTolerance: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateUserSlippageTolerance">, updateHideBaseWalletBanner: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateHideBaseWalletBanner">, updateDisabledUniswapX: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateDisabledUniswapX">, updateOptedOutOfUniswapX: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateOptedOutOfUniswapX">;
declare const _default: import("redux").Reducer<UserState, import("redux").AnyAction>;
export default _default;
