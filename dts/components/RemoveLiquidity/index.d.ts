/// <reference types="react" />
import { BigNumber } from '@ethersproject/bignumber';
export default function RemoveLiquidity({ tokenId, onClose, onReload, }: {
    tokenId?: BigNumber;
    onClose?: () => void;
    onReload?: () => void;
}): JSX.Element | null;
