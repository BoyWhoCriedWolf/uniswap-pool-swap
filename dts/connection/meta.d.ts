import { ConnectionType } from "./types";
export interface ConnectionMeta {
    type: ConnectionType;
    address?: string;
    ENSName?: string;
}
export declare const connectionMetaKey = "connection_meta";
export declare function getPersistedConnectionMeta(): ConnectionMeta | undefined;
export declare function setPersistedConnectionMeta(meta: ConnectionMeta): void;
export declare function deletePersistedConnectionMeta(): void;
