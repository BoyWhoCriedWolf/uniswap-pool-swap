import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
import { Currency, CurrencyAmount, Percent, TradeType } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare enum TransactionType {
    APPROVAL = 0,
    SWAP = 1,
    DEPOSIT_LIQUIDITY_STAKING = 2,
    WITHDRAW_LIQUIDITY_STAKING = 3,
    CLAIM = 4,
    VOTE = 5,
    DELEGATE = 6,
    WRAP = 7,
    UNWRAP = 8,
    CREATE_V3_POOL = 9,
    ADD_LIQUIDITY_V3_POOL = 10,
    ADD_LIQUIDITY_V2_POOL = 11,
    MIGRATE_LIQUIDITY_V3 = 12,
    COLLECT_FEES = 13,
    REMOVE_LIQUIDITY_V3 = 14,
    SUBMIT_PROPOSAL = 15,
    QUEUE = 16,
    EXECUTE = 17,
    BUY = 18,
    SEND = 19,
    RECEIVE = 20,
    MINT = 21,
    BURN = 22,
    BORROW = 23,
    REPAY = 24,
    DEPLOY = 25,
    CANCEL = 26
}
export declare enum VoteOption {
    Against = 0,
    For = 1,
    Abstain = 2
}
interface BaseTransactionInfo {
    type: TransactionType;
    response: TransactionResponse;
}
export interface ApprovalTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.APPROVAL;
    tokenAddress: string;
    spenderAddress: string;
}
export interface SwapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.SWAP;
    tradeType: TradeType;
    trade: InterfaceTrade;
    slippageTolerance: Percent;
}
export interface ExactInputSwapTransactionInfo extends SwapTransactionInfo {
    tradeType: TradeType.EXACT_INPUT;
}
export interface ExactOutputSwapTransactionInfo extends SwapTransactionInfo {
    tradeType: TradeType.EXACT_OUTPUT;
}
export interface WrapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.WRAP;
    amount: CurrencyAmount<Currency>;
}
export interface UnwrapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.UNWRAP;
    amount: CurrencyAmount<Currency>;
}
export interface AddLiquidityV3PoolTransactionInfo {
    type: TransactionType.ADD_LIQUIDITY_V3_POOL;
    createPool: boolean;
    baseCurrencyId: string;
    quoteCurrencyId: string;
    feeAmount: number;
    expectedAmountBaseRaw: string;
    expectedAmountQuoteRaw: string;
}
export interface RemoveLiquidityV3TransactionInfo {
    type: TransactionType.REMOVE_LIQUIDITY_V3;
    baseCurrencyId: string;
    quoteCurrencyId: string;
    expectedAmountBaseRaw: string;
    expectedAmountQuoteRaw: string;
}
export interface ClaimTransactionInfo {
    type: TransactionType.CLAIM;
    recipient: string;
    uniAmountRaw?: string;
}
export interface CreateV3PoolTransactionInfo {
    type: TransactionType.CREATE_V3_POOL;
    baseCurrencyId: string;
    quoteCurrencyId: string;
}
export interface VoteTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.VOTE;
    governorAddress: string;
    proposalId: number;
    decision: VoteOption;
    reason: string;
}
export interface QueueTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.QUEUE;
    governorAddress: string;
    proposalId: number;
}
export interface ExecuteTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.EXECUTE;
    governorAddress: string;
    proposalId: number;
}
export interface DelegateTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.DELEGATE;
    delegatee: string;
}
interface DepositLiquidityStakingTransactionInfo {
    type: TransactionType.DEPOSIT_LIQUIDITY_STAKING;
    token0Address: string;
    token1Address: string;
}
interface WithdrawLiquidityStakingTransactionInfo {
    type: TransactionType.WITHDRAW_LIQUIDITY_STAKING;
    token0Address: string;
    token1Address: string;
}
export interface AddLiquidityV2PoolTransactionInfo {
    type: TransactionType.ADD_LIQUIDITY_V2_POOL;
    baseCurrencyId: string;
    quoteCurrencyId: string;
    expectedAmountBaseRaw: string;
    expectedAmountQuoteRaw: string;
}
export interface MigrateV2LiquidityToV3TransactionInfo {
    type: TransactionType.MIGRATE_LIQUIDITY_V3;
    baseCurrencyId: string;
    quoteCurrencyId: string;
    isFork: boolean;
}
export interface CollectFeesTransactionInfo {
    type: TransactionType.COLLECT_FEES;
    currencyId0: string;
    currencyId1: string;
    expectedCurrencyOwed0: string;
    expectedCurrencyOwed1: string;
}
interface SubmitProposalTransactionInfo {
    type: TransactionType.SUBMIT_PROPOSAL;
}
export declare type TransactionInfo = ApprovalTransactionInfo | SwapTransactionInfo | ClaimTransactionInfo | VoteTransactionInfo | QueueTransactionInfo | ExecuteTransactionInfo | DelegateTransactionInfo | DepositLiquidityStakingTransactionInfo | WithdrawLiquidityStakingTransactionInfo | WrapTransactionInfo | UnwrapTransactionInfo | CreateV3PoolTransactionInfo | AddLiquidityV3PoolTransactionInfo | AddLiquidityV2PoolTransactionInfo | MigrateV2LiquidityToV3TransactionInfo | CollectFeesTransactionInfo | RemoveLiquidityV3TransactionInfo | SubmitProposalTransactionInfo;
export interface Transaction<T extends TransactionInfo = TransactionInfo> {
    addedTime: number;
    lastCheckedBlockNumber?: number;
    receipt?: TransactionReceipt;
    info: T;
}
export declare const transactionsAtom: import("jotai").WritableAtom<{
    [chainId: string]: {
        [hash: string]: Transaction<TransactionInfo>;
    };
}, {
    [chainId: string]: {
        [hash: string]: Transaction<TransactionInfo>;
    };
} | ((draft: import("immer/dist/internal").WritableDraft<{
    [chainId: string]: {
        [hash: string]: Transaction<TransactionInfo>;
    };
}>) => void), void>;
export {};
