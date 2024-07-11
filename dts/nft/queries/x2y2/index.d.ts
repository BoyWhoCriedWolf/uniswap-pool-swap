import { OrderPayload } from "../../utils/x2y2";
export declare const X2Y2_TRANSFER_CONTRACT_721 = "0xf849de01b080adc3a814fabe1e2087475cf2e354";
export declare const X2Y2_TRANSFER_CONTRACT_1155 = "0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779";
export declare const newX2Y2Order: (payload: OrderPayload) => Promise<boolean>;
export declare const getX2Y2OrderId: (collectionAddress: string, tokenId: string) => Promise<number | undefined>;
