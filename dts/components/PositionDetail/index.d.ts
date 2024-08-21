/// <reference types="react" />
import { PositionDetails } from 'types/position';
import { BigNumber } from 'ethers';
export default function PositionPage({ positionDetails, onIncrease, onClose, onDelete, }: {
    positionDetails: PositionDetails;
    onIncrease?: ({}: {
        currencyIdA: string;
        currencyIdB: string;
        feeAmount: number;
        tokenId: BigNumber;
    }) => void;
    onClose?: () => void;
    onDelete?: () => void;
}): JSX.Element;
