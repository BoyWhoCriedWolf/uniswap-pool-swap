import { MigrationManifest, PersistMigrate } from "redux-persist";
import { MigrationConfig } from "redux-persist/es/createMigrate";
/**
 * These run once per state re-hydration when a version mismatch is detected.
 * Keep them as lightweight as possible.
 *
 * Migration functions should not assume that any value exists in localStorage previously,
 * because a user may be visiting the site for the first time or have cleared their localStorage.
 */
export declare const migrations: MigrationManifest;
export declare function customCreateMigrate(migrations: MigrationManifest, options: MigrationConfig): PersistMigrate;
