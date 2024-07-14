import { UniconAttributeData, UniconAttributesToIndices } from "./types";
export declare const isEthAddress: (address: string) => boolean;
export declare const deriveUniconAttributeIndices: (address: string, randomSeed?: number) => UniconAttributesToIndices | undefined;
export declare const getUniconAttributeData: (attributeIndices: UniconAttributesToIndices) => UniconAttributeData;
