import { PositionDetails } from "types/position";
/**
 * This function is an attempt to filter out an observed phishing attack from LP list UIs.
 * Attackers would airdrop valueless LP positions with urls in the symbol to render phishing sites into users' LP position list view.
 *
 * Our approach to filtering these out without naively prohibiting all valid URL symbols is to:
 * 1. allow any pair if both tokens are in the supported list
 * 2. allow one url if one token is in the supported list
 * 3. allow no urls if neither token is in the supported list
 *
 * The hope is that this approach removes the cheapest version of the attack without punishing non-malicious url symbols
 */
export declare function useFilterPossiblyMaliciousPositions(positions: PositionDetails[]): PositionDetails[];
