import { Token } from "@uniswap/sdk-core";
import { SerializedToken } from "./types";
export declare function deserializeToken(serializedToken: SerializedToken, Class?: typeof Token): Token;
