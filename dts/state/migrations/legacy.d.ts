import { TransactionState } from "../transactions/reducer";
import { UserState } from "../user/reducer";
/**
 * These functions handle all migrations that existed before we started tracking version numbers.
 */
export declare const legacyLocalStorageMigration: () => Promise<{
    user: UserState;
    transactions: TransactionState;
    lists: import("../lists/reducer").ListsState;
    signatures: {};
    _persist: {
        version: number;
        rehydrated: boolean;
    };
}>;
