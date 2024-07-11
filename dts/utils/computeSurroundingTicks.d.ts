import { Token } from "@uniswap/sdk-core";
import { TickProcessed } from "hooks/usePoolTickData";
import { Ticks } from "../graphql/thegraph/AllV3TicksQuery";
export default function computeSurroundingTicks(token0: Token, token1: Token, activeTickProcessed: TickProcessed, sortedTickData: Ticks, pivot: number, ascending: boolean): TickProcessed[];
