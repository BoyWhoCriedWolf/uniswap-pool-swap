/// <reference types="react" />
import { LiquidityChartRangeInputProps } from "./types";
export declare function Chart({ id, data: { series, current }, ticksAtLimit, styles, dimensions: { width, height }, margins, interactive, brushDomain, brushLabels, onBrushDomainChange, zoomLevels, }: LiquidityChartRangeInputProps): JSX.Element;
