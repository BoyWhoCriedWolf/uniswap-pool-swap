import { BigNumber } from '@ethersproject/bignumber';
import { PositionDetails } from 'types/position';
interface UseV3PositionsResults {
    loading: boolean;
    positions?: PositionDetails[];
}
interface UseV3PositionResults {
    loading: boolean;
    position?: PositionDetails;
}
export declare function useV3PositionFromTokenId(tokenId: BigNumber | undefined): UseV3PositionResults;
export declare function useV3Positions(account: string | null | undefined): UseV3PositionsResults;
export {};
