import React from 'react';
import { PositionDetails } from 'types/position';
declare type PositionListProps = React.PropsWithChildren<{
    positions: PositionDetails[];
    setUserHideClosedPositions: any;
    userHideClosedPositions: boolean;
    onReload?: () => void;
}>;
export default function PositionList({ positions, setUserHideClosedPositions, userHideClosedPositions, onReload, }: PositionListProps): JSX.Element;
export {};
