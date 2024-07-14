import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that
     * complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like
     * "**{\\"upvotes\\": 10}**", lists like "**[1,2,3]**", and scalar values like
     * "**\\"AWSJSON example string\\"**", "**1**", and "**true**" are accepted as
     * valid JSON and will automatically be parsed and loaded in the resolver mapping
     * templates as Maps, Lists, or Scalar values rather than as the literal input
     * strings.  Invalid JSON strings like "**{a: 1}**", "**{'a': 1}**" and "**Unquoted
     * string**" will throw GraphQL validation errors.
     */
    AWSJSON: any;
};
/**
 *  Types, unions, and inputs (alphabetized):
 * These are colocated to highlight the relationship between some types and their inputs.
 */
export type ActivityDetails = OnRampTransactionDetails | SwapOrderDetails | TransactionDetails;
export type ActivityDetailsInput = {
    readonly onRampTransactionDetails?: InputMaybe<OnRampTransactionDetailsInput>;
    readonly swapOrderDetails?: InputMaybe<SwapOrderDetailsInput>;
    readonly transactionDetails?: InputMaybe<TransactionDetailsInput>;
};
/**
 *  Enums (alphabetized):
 * deprecated and replaced with TransactionType, please do not use this
 */
export declare enum ActivityType {
    Approve = "APPROVE",
    Borrow = "BORROW",
    Burn = "BURN",
    Cancel = "CANCEL",
    Claim = "CLAIM",
    Deployment = "DEPLOYMENT",
    Lend = "LEND",
    Mint = "MINT",
    Nft = "NFT",
    OnRamp = "ON_RAMP",
    Receive = "RECEIVE",
    Repay = "REPAY",
    Send = "SEND",
    Stake = "STAKE",
    Swap = "SWAP",
    SwapOrder = "SWAP_ORDER",
    Staking = "Staking",
    Unknown = "UNKNOWN",
    Unstake = "UNSTAKE",
    Withdraw = "WITHDRAW",
    Market = "market",
    Money = "money"
}
export type Amount = IAmount & {
    readonly __typename?: 'Amount';
    readonly currency?: Maybe<Currency>;
    readonly id: Scalars['ID'];
    readonly value: Scalars['Float'];
};
export type AmountChange = {
    readonly __typename?: 'AmountChange';
    readonly absolute?: Maybe<Amount>;
    readonly id: Scalars['ID'];
    readonly percentage?: Maybe<Amount>;
};
export type AmountInput = {
    readonly currency?: InputMaybe<Currency>;
    readonly value: Scalars['Float'];
};
export type ApplicationContract = IContract & {
    readonly __typename?: 'ApplicationContract';
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly icon?: Maybe<Image>;
    readonly id: Scalars['ID'];
    readonly name?: Maybe<Scalars['String']>;
};
export type ApplicationContractInput = {
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly icon?: InputMaybe<ImageInput>;
    readonly name?: InputMaybe<Scalars['String']>;
};
export type AssetActivity = {
    readonly __typename?: 'AssetActivity';
    readonly addresses?: Maybe<ReadonlyArray<Scalars['String']>>;
    /** @deprecated use assetChanges field in details */
    readonly assetChanges: ReadonlyArray<Maybe<AssetChange>>;
    readonly chain: Chain;
    readonly details: ActivityDetails;
    /** @deprecated not required, remove usage */
    readonly gasUsed?: Maybe<Scalars['Float']>;
    readonly id: Scalars['ID'];
    readonly timestamp: Scalars['Int'];
    /** @deprecated use fields from details */
    readonly transaction: Transaction;
    /** @deprecated use type field in details */
    readonly type: ActivityType;
};
export type AssetActivityInput = {
    readonly chain: Chain;
    readonly details: ActivityDetailsInput;
    readonly timestamp: Scalars['Int'];
};
export declare enum AssetActivitySwitch {
    Alternate = "ALTERNATE",
    Legacy = "LEGACY"
}
export type AssetChange = NftApproval | NftApproveForAll | NftTransfer | OnRampTransfer | TokenApproval | TokenTransfer;
export type AssetChangeInput = {
    readonly nftApproval?: InputMaybe<NftApprovalInput>;
    readonly nftApproveForAll?: InputMaybe<NftApproveForAllInput>;
    readonly nftTransfer?: InputMaybe<NftTransferInput>;
    readonly onRampTransfer?: InputMaybe<OnRampTransferInput>;
    readonly tokenApproval?: InputMaybe<TokenApprovalInput>;
    readonly tokenTransfer?: InputMaybe<TokenTransferInput>;
};
export declare enum Chain {
    Arbitrum = "ARBITRUM",
    Avalanche = "AVALANCHE",
    Base = "BASE",
    Blast = "BLAST",
    Bnb = "BNB",
    Celo = "CELO",
    Ethereum = "ETHEREUM",
    EthereumGoerli = "ETHEREUM_GOERLI",
    EthereumSepolia = "ETHEREUM_SEPOLIA",
    Optimism = "OPTIMISM",
    Polygon = "POLYGON",
    UnknownChain = "UNKNOWN_CHAIN",
    Zksync = "ZKSYNC",
    Zora = "ZORA"
}
export declare enum CollectionSortableField {
    Volume = "VOLUME"
}
export type ContractInput = {
    readonly address?: InputMaybe<Scalars['String']>;
    readonly chain: Chain;
};
export declare enum Currency {
    Aud = "AUD",
    Brl = "BRL",
    Cad = "CAD",
    Cny = "CNY",
    Eth = "ETH",
    Eur = "EUR",
    Gbp = "GBP",
    Hkd = "HKD",
    Idr = "IDR",
    Inr = "INR",
    Jpy = "JPY",
    Matic = "MATIC",
    Ngn = "NGN",
    Pkr = "PKR",
    Rub = "RUB",
    Sgd = "SGD",
    Thb = "THB",
    Try = "TRY",
    Uah = "UAH",
    Usd = "USD",
    Vnd = "VND"
}
export type CurrencyAmountInput = {
    readonly currency: Currency;
    readonly value: Scalars['Float'];
};
export type DescriptionTranslations = {
    readonly __typename?: 'DescriptionTranslations';
    readonly descriptionEnUs?: Maybe<Scalars['String']>;
    readonly descriptionEs419?: Maybe<Scalars['String']>;
    readonly descriptionEsEs?: Maybe<Scalars['String']>;
    readonly descriptionEsUs?: Maybe<Scalars['String']>;
    readonly descriptionFrFr?: Maybe<Scalars['String']>;
    readonly descriptionHiIn?: Maybe<Scalars['String']>;
    readonly descriptionIdId?: Maybe<Scalars['String']>;
    readonly descriptionJaJp?: Maybe<Scalars['String']>;
    readonly descriptionMsMy?: Maybe<Scalars['String']>;
    readonly descriptionNlNl?: Maybe<Scalars['String']>;
    readonly descriptionPtPt?: Maybe<Scalars['String']>;
    readonly descriptionRuRu?: Maybe<Scalars['String']>;
    readonly descriptionThTh?: Maybe<Scalars['String']>;
    readonly descriptionTrTr?: Maybe<Scalars['String']>;
    readonly descriptionUkUa?: Maybe<Scalars['String']>;
    readonly descriptionUrPk?: Maybe<Scalars['String']>;
    readonly descriptionViVn?: Maybe<Scalars['String']>;
    readonly descriptionZhHans?: Maybe<Scalars['String']>;
    readonly descriptionZhHant?: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
};
export type Dimensions = {
    readonly __typename?: 'Dimensions';
    readonly height?: Maybe<Scalars['Float']>;
    readonly id: Scalars['ID'];
    readonly width?: Maybe<Scalars['Float']>;
};
export type DimensionsInput = {
    readonly height?: InputMaybe<Scalars['Float']>;
    readonly width?: InputMaybe<Scalars['Float']>;
};
export type FeeData = {
    readonly __typename?: 'FeeData';
    readonly buyFeeBps?: Maybe<Scalars['String']>;
    readonly externalTransferFailed?: Maybe<Scalars['Boolean']>;
    readonly feeTakenOnTransfer?: Maybe<Scalars['Boolean']>;
    readonly sellFeeBps?: Maybe<Scalars['String']>;
    readonly sellReverted?: Maybe<Scalars['Boolean']>;
};
export declare enum HighLow {
    High = "HIGH",
    Low = "LOW"
}
/**   FIVE_MINUTE is only supported for TokenMarket.pricePercentChange */
export declare enum HistoryDuration {
    Day = "DAY",
    FiveMinute = "FIVE_MINUTE",
    Hour = "HOUR",
    Max = "MAX",
    Month = "MONTH",
    Week = "WEEK",
    Year = "YEAR"
}
/**   Interfaces (alphabetized): */
export type IAmount = {
    readonly currency?: Maybe<Currency>;
    readonly value: Scalars['Float'];
};
export type IContract = {
    readonly address?: Maybe<Scalars['String']>;
    readonly chain: Chain;
};
export type IPool = {
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly createdAtTimestamp?: Maybe<Scalars['Int']>;
    readonly cumulativeVolume?: Maybe<Amount>;
    readonly historicalVolume?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly id: Scalars['ID'];
    readonly priceHistory?: Maybe<ReadonlyArray<Maybe<TimestampedPoolPrice>>>;
    readonly protocolVersion: ProtocolVersion;
    readonly token0?: Maybe<Token>;
    readonly token0Supply?: Maybe<Scalars['Float']>;
    readonly token1?: Maybe<Token>;
    readonly token1Supply?: Maybe<Scalars['Float']>;
    readonly totalLiquidity?: Maybe<Amount>;
    readonly totalLiquidityPercentChange24h?: Maybe<Amount>;
    readonly transactions?: Maybe<ReadonlyArray<Maybe<PoolTransaction>>>;
    readonly txCount?: Maybe<Scalars['Int']>;
};
export type IPoolCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type IPoolHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type IPoolPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type IPoolTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type Image = {
    readonly __typename?: 'Image';
    readonly dimensions?: Maybe<Dimensions>;
    readonly id: Scalars['ID'];
    readonly url: Scalars['String'];
};
export type ImageInput = {
    readonly dimensions?: InputMaybe<DimensionsInput>;
    readonly url: Scalars['String'];
};
export declare enum MediaType {
    Audio = "AUDIO",
    Image = "IMAGE",
    Raw = "RAW",
    Video = "VIDEO"
}
export type Mutation = {
    readonly __typename?: 'Mutation';
    readonly assetActivity: AssetActivity;
    readonly heartbeat: Status;
    readonly unsubscribe: Status;
};
export type MutationAssetActivityArgs = {
    input: AssetActivityInput;
};
export type MutationHeartbeatArgs = {
    subscriptionId: Scalars['ID'];
    type: SubscriptionType;
};
export type MutationUnsubscribeArgs = {
    subscriptionId: Scalars['ID'];
    type: SubscriptionType;
};
export type NetworkFee = {
    readonly __typename?: 'NetworkFee';
    readonly quantity?: Maybe<Scalars['String']>;
    readonly tokenAddress?: Maybe<Scalars['String']>;
    readonly tokenChain?: Maybe<Scalars['String']>;
    readonly tokenSymbol?: Maybe<Scalars['String']>;
};
export type NftActivity = {
    readonly __typename?: 'NftActivity';
    readonly address: Scalars['String'];
    readonly asset?: Maybe<NftAsset>;
    readonly fromAddress: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly marketplace?: Maybe<Scalars['String']>;
    readonly orderStatus?: Maybe<OrderStatus>;
    readonly price?: Maybe<Amount>;
    readonly quantity?: Maybe<Scalars['Int']>;
    readonly timestamp: Scalars['Int'];
    readonly toAddress?: Maybe<Scalars['String']>;
    readonly tokenId?: Maybe<Scalars['String']>;
    readonly transactionHash?: Maybe<Scalars['String']>;
    readonly type: NftActivityType;
    readonly url?: Maybe<Scalars['String']>;
};
export type NftActivityConnection = {
    readonly __typename?: 'NftActivityConnection';
    readonly edges: ReadonlyArray<NftActivityEdge>;
    readonly pageInfo: PageInfo;
};
export type NftActivityEdge = {
    readonly __typename?: 'NftActivityEdge';
    readonly cursor: Scalars['String'];
    readonly node: NftActivity;
};
export type NftActivityFilterInput = {
    readonly activityTypes?: InputMaybe<ReadonlyArray<NftActivityType>>;
    readonly address?: InputMaybe<Scalars['String']>;
    readonly tokenId?: InputMaybe<Scalars['String']>;
};
export declare enum NftActivityType {
    CancelListing = "CANCEL_LISTING",
    Listing = "LISTING",
    Sale = "SALE",
    Transfer = "TRANSFER"
}
export type NftApproval = {
    readonly __typename?: 'NftApproval';
    readonly approvedAddress: Scalars['String'];
    /**   can be erc721, erc1155, noncompliant */
    readonly asset: NftAsset;
    readonly id: Scalars['ID'];
    readonly nftStandard: NftStandard;
};
export type NftApprovalInput = {
    readonly approvedAddress: Scalars['String'];
    readonly asset: NftAssetInput;
    readonly nftStandard: NftStandard;
};
export type NftApproveForAll = {
    readonly __typename?: 'NftApproveForAll';
    readonly approved: Scalars['Boolean'];
    /**   can be erc721, erc1155, noncompliant */
    readonly asset: NftAsset;
    readonly id: Scalars['ID'];
    readonly nftStandard: NftStandard;
    readonly operatorAddress: Scalars['String'];
};
export type NftApproveForAllInput = {
    readonly approved: Scalars['Boolean'];
    readonly asset: NftAssetInput;
    readonly nftStandard: NftStandard;
    readonly operatorAddress: Scalars['String'];
};
export type NftAsset = {
    readonly __typename?: 'NftAsset';
    readonly animationUrl?: Maybe<Scalars['String']>;
    readonly chain?: Maybe<Chain>;
    readonly collection?: Maybe<NftCollection>;
    readonly creator?: Maybe<NftProfile>;
    readonly description?: Maybe<Scalars['String']>;
    readonly flaggedBy?: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly image?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    readonly imageUrl?: Maybe<Scalars['String']>;
    readonly isSpam?: Maybe<Scalars['Boolean']>;
    readonly listings?: Maybe<NftOrderConnection>;
    readonly mediaType?: Maybe<MediaType>;
    readonly metadataUrl?: Maybe<Scalars['String']>;
    readonly name?: Maybe<Scalars['String']>;
    readonly nftContract?: Maybe<NftContract>;
    readonly originalImage?: Maybe<Image>;
    /**   TODO: may need to be array to support erc1155 cases. not needed at the moment so will revisit. */
    readonly ownerAddress?: Maybe<Scalars['String']>;
    readonly rarities?: Maybe<ReadonlyArray<NftAssetRarity>>;
    readonly smallImage?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    readonly smallImageUrl?: Maybe<Scalars['String']>;
    readonly suspiciousFlag?: Maybe<Scalars['Boolean']>;
    readonly thumbnail?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    readonly thumbnailUrl?: Maybe<Scalars['String']>;
    readonly tokenId: Scalars['String'];
    readonly traits?: Maybe<ReadonlyArray<NftAssetTrait>>;
};
export type NftAssetListingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    asc?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};
export type NftAssetConnection = {
    readonly __typename?: 'NftAssetConnection';
    readonly edges: ReadonlyArray<NftAssetEdge>;
    readonly pageInfo: PageInfo;
    readonly totalCount?: Maybe<Scalars['Int']>;
};
export type NftAssetEdge = {
    readonly __typename?: 'NftAssetEdge';
    readonly cursor: Scalars['String'];
    readonly node: NftAsset;
};
export type NftAssetInput = {
    readonly animationUrl?: InputMaybe<Scalars['String']>;
    readonly collection?: InputMaybe<NftCollectionInput>;
    readonly description?: InputMaybe<Scalars['String']>;
    readonly image?: InputMaybe<ImageInput>;
    readonly isSpam?: InputMaybe<Scalars['Boolean']>;
    readonly mediaType?: InputMaybe<MediaType>;
    readonly name?: InputMaybe<Scalars['String']>;
    readonly nftContract?: InputMaybe<NftContractInput>;
    readonly smallImage?: InputMaybe<ImageInput>;
    readonly thumbnail?: InputMaybe<ImageInput>;
    readonly tokenId: Scalars['String'];
};
export type NftAssetRarity = {
    readonly __typename?: 'NftAssetRarity';
    readonly id: Scalars['ID'];
    readonly provider?: Maybe<NftRarityProvider>;
    readonly rank?: Maybe<Scalars['Int']>;
    readonly score?: Maybe<Scalars['Float']>;
};
export declare enum NftAssetSortableField {
    Price = "PRICE",
    Rarity = "RARITY"
}
export type NftAssetTrait = {
    readonly __typename?: 'NftAssetTrait';
    readonly id: Scalars['ID'];
    readonly name?: Maybe<Scalars['String']>;
    readonly rarity?: Maybe<Scalars['Float']>;
    readonly value?: Maybe<Scalars['String']>;
};
export type NftAssetTraitInput = {
    readonly name: Scalars['String'];
    readonly values: ReadonlyArray<Scalars['String']>;
};
export type NftAssetsFilterInput = {
    readonly listed?: InputMaybe<Scalars['Boolean']>;
    readonly marketplaces?: InputMaybe<ReadonlyArray<NftMarketplace>>;
    readonly maxPrice?: InputMaybe<Scalars['String']>;
    readonly minPrice?: InputMaybe<Scalars['String']>;
    readonly tokenIds?: InputMaybe<ReadonlyArray<Scalars['String']>>;
    readonly tokenSearchQuery?: InputMaybe<Scalars['String']>;
    readonly traits?: InputMaybe<ReadonlyArray<NftAssetTraitInput>>;
};
export type NftBalance = {
    readonly __typename?: 'NftBalance';
    readonly id: Scalars['ID'];
    readonly lastPrice?: Maybe<TimestampedAmount>;
    readonly listedMarketplaces?: Maybe<ReadonlyArray<NftMarketplace>>;
    readonly listingFees?: Maybe<ReadonlyArray<Maybe<NftFee>>>;
    readonly ownedAsset?: Maybe<NftAsset>;
    readonly quantity?: Maybe<Scalars['Int']>;
};
export type NftBalanceAssetInput = {
    readonly address: Scalars['String'];
    readonly tokenId: Scalars['String'];
};
export type NftBalanceConnection = {
    readonly __typename?: 'NftBalanceConnection';
    readonly edges: ReadonlyArray<NftBalanceEdge>;
    readonly pageInfo: PageInfo;
};
export type NftBalanceEdge = {
    readonly __typename?: 'NftBalanceEdge';
    readonly cursor: Scalars['String'];
    readonly node: NftBalance;
};
export type NftBalancesFilterInput = {
    readonly addresses?: InputMaybe<ReadonlyArray<Scalars['String']>>;
    readonly assets?: InputMaybe<ReadonlyArray<NftBalanceAssetInput>>;
    readonly filterSpam?: InputMaybe<Scalars['Boolean']>;
};
export type NftCollection = {
    readonly __typename?: 'NftCollection';
    readonly bannerImage?: Maybe<Image>;
    /**
     *  TODO: support querying for collection assets here
     * assets(page: Int, pageSize: Int, orderBy: NftAssetSortableField): [NftAsset]
     * @deprecated Field no longer supported
     */
    readonly bannerImageUrl?: Maybe<Scalars['String']>;
    readonly collectionId: Scalars['String'];
    readonly creator?: Maybe<NftProfile>;
    readonly description?: Maybe<Scalars['String']>;
    readonly discordUrl?: Maybe<Scalars['String']>;
    readonly homepageUrl?: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly image?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    readonly imageUrl?: Maybe<Scalars['String']>;
    readonly instagramName?: Maybe<Scalars['String']>;
    readonly isVerified?: Maybe<Scalars['Boolean']>;
    readonly markets?: Maybe<ReadonlyArray<NftCollectionMarket>>;
    readonly name?: Maybe<Scalars['String']>;
    readonly nftContracts?: Maybe<ReadonlyArray<NftContract>>;
    readonly numAssets?: Maybe<Scalars['Int']>;
    /** @deprecated Field no longer supported */
    readonly openseaUrl?: Maybe<Scalars['String']>;
    readonly traits?: Maybe<ReadonlyArray<NftCollectionTrait>>;
    readonly twitterName?: Maybe<Scalars['String']>;
};
export type NftCollectionMarketsArgs = {
    currencies: ReadonlyArray<Currency>;
};
export type NftCollectionBalance = {
    readonly __typename?: 'NftCollectionBalance';
    readonly address: Scalars['String'];
    readonly balance: Scalars['Float'];
    readonly id: Scalars['ID'];
    readonly logoImage?: Maybe<Image>;
    readonly name: Scalars['String'];
};
export type NftCollectionBalanceConnection = {
    readonly __typename?: 'NftCollectionBalanceConnection';
    readonly edges: ReadonlyArray<NftCollectionBalanceEdge>;
    readonly pageInfo: PageInfo;
};
export type NftCollectionBalanceEdge = {
    readonly __typename?: 'NftCollectionBalanceEdge';
    readonly cursor: Scalars['String'];
    readonly node: NftCollectionBalance;
};
export type NftCollectionConnection = {
    readonly __typename?: 'NftCollectionConnection';
    readonly edges: ReadonlyArray<NftCollectionEdge>;
    readonly pageInfo: PageInfo;
};
export type NftCollectionEdge = {
    readonly __typename?: 'NftCollectionEdge';
    readonly cursor: Scalars['String'];
    readonly node: NftCollection;
};
export type NftCollectionInput = {
    readonly collectionId: Scalars['String'];
    readonly name?: InputMaybe<Scalars['String']>;
    readonly nftContracts?: InputMaybe<ReadonlyArray<NftContractInput>>;
};
export type NftCollectionMarket = {
    readonly __typename?: 'NftCollectionMarket';
    readonly floorPrice?: Maybe<TimestampedAmount>;
    readonly floorPricePercentChange?: Maybe<TimestampedAmount>;
    readonly id: Scalars['ID'];
    readonly listings?: Maybe<TimestampedAmount>;
    readonly marketplaces?: Maybe<ReadonlyArray<NftCollectionMarketplace>>;
    readonly nftContracts?: Maybe<ReadonlyArray<NftContract>>;
    readonly owners?: Maybe<Scalars['Int']>;
    readonly percentListed?: Maybe<TimestampedAmount>;
    readonly percentUniqueOwners?: Maybe<TimestampedAmount>;
    readonly sales?: Maybe<TimestampedAmount>;
    readonly totalVolume?: Maybe<TimestampedAmount>;
    readonly volume?: Maybe<TimestampedAmount>;
    /** @deprecated Field no longer supported */
    readonly volume24h?: Maybe<Amount>;
    readonly volumePercentChange?: Maybe<TimestampedAmount>;
};
export type NftCollectionMarketFloorPricePercentChangeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketMarketplacesArgs = {
    marketplaces?: InputMaybe<ReadonlyArray<NftMarketplace>>;
};
export type NftCollectionMarketSalesArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketVolumeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketVolumePercentChangeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketplace = {
    readonly __typename?: 'NftCollectionMarketplace';
    readonly floorPrice?: Maybe<Scalars['Float']>;
    readonly id: Scalars['ID'];
    readonly listings?: Maybe<Scalars['Int']>;
    readonly marketplace?: Maybe<NftMarketplace>;
};
export type NftCollectionTrait = {
    readonly __typename?: 'NftCollectionTrait';
    readonly id: Scalars['ID'];
    readonly name?: Maybe<Scalars['String']>;
    readonly stats?: Maybe<ReadonlyArray<NftCollectionTraitStats>>;
    readonly values?: Maybe<ReadonlyArray<Scalars['String']>>;
};
export type NftCollectionTraitStats = {
    readonly __typename?: 'NftCollectionTraitStats';
    readonly assets?: Maybe<Scalars['Int']>;
    readonly id: Scalars['ID'];
    readonly listings?: Maybe<Scalars['Int']>;
    readonly name?: Maybe<Scalars['String']>;
    readonly value?: Maybe<Scalars['String']>;
};
export type NftCollectionsFilterInput = {
    readonly addresses?: InputMaybe<ReadonlyArray<Scalars['String']>>;
    readonly nameQuery?: InputMaybe<Scalars['String']>;
};
export type NftContract = IContract & {
    readonly __typename?: 'NftContract';
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly id: Scalars['ID'];
    readonly name?: Maybe<Scalars['String']>;
    readonly standard?: Maybe<NftStandard>;
    readonly symbol?: Maybe<Scalars['String']>;
    readonly totalSupply?: Maybe<Scalars['Int']>;
};
export type NftContractInput = {
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly name?: InputMaybe<Scalars['String']>;
    readonly standard?: InputMaybe<NftStandard>;
    readonly symbol?: InputMaybe<Scalars['String']>;
    readonly totalSupply?: InputMaybe<Scalars['Int']>;
};
export type NftFee = {
    readonly __typename?: 'NftFee';
    readonly basisPoints: Scalars['Int'];
    readonly id: Scalars['ID'];
    readonly payoutAddress: Scalars['String'];
};
export declare enum NftMarketplace {
    Cryptopunks = "CRYPTOPUNKS",
    Foundation = "FOUNDATION",
    Looksrare = "LOOKSRARE",
    Nft20 = "NFT20",
    Nftx = "NFTX",
    Opensea = "OPENSEA",
    Sudoswap = "SUDOSWAP",
    X2Y2 = "X2Y2"
}
export type NftOrder = {
    readonly __typename?: 'NftOrder';
    readonly address: Scalars['String'];
    readonly auctionType?: Maybe<Scalars['String']>;
    readonly createdAt: Scalars['Float'];
    readonly endAt?: Maybe<Scalars['Float']>;
    readonly id: Scalars['ID'];
    readonly maker: Scalars['String'];
    readonly marketplace: NftMarketplace;
    readonly marketplaceUrl: Scalars['String'];
    readonly orderHash?: Maybe<Scalars['String']>;
    readonly poolPrices?: Maybe<ReadonlyArray<Scalars['String']>>;
    readonly price: Amount;
    readonly protocolParameters?: Maybe<Scalars['AWSJSON']>;
    readonly quantity: Scalars['Int'];
    readonly startAt: Scalars['Float'];
    readonly status: OrderStatus;
    readonly taker?: Maybe<Scalars['String']>;
    readonly tokenId?: Maybe<Scalars['String']>;
    readonly type: OrderType;
};
export type NftOrderConnection = {
    readonly __typename?: 'NftOrderConnection';
    readonly edges: ReadonlyArray<NftOrderEdge>;
    readonly pageInfo: PageInfo;
};
export type NftOrderEdge = {
    readonly __typename?: 'NftOrderEdge';
    readonly cursor: Scalars['String'];
    readonly node: NftOrder;
};
export type NftProfile = {
    readonly __typename?: 'NftProfile';
    readonly address: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly isVerified?: Maybe<Scalars['Boolean']>;
    readonly profileImage?: Maybe<Image>;
    readonly username?: Maybe<Scalars['String']>;
};
export declare enum NftRarityProvider {
    RaritySniper = "RARITY_SNIPER"
}
export type NftRouteResponse = {
    readonly __typename?: 'NftRouteResponse';
    readonly calldata: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly route?: Maybe<ReadonlyArray<NftTrade>>;
    readonly sendAmount: TokenAmount;
    readonly toAddress: Scalars['String'];
};
export declare enum NftStandard {
    Erc721 = "ERC721",
    Erc1155 = "ERC1155",
    Noncompliant = "NONCOMPLIANT"
}
export type NftTrade = {
    readonly __typename?: 'NftTrade';
    readonly amount: Scalars['Int'];
    readonly contractAddress: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly marketplace: NftMarketplace;
    /**   price represents the current price of the NFT, which can be different from quotePrice */
    readonly price: TokenAmount;
    /**   quotePrice represents the last quoted price of the NFT */
    readonly quotePrice?: Maybe<TokenAmount>;
    readonly tokenId: Scalars['String'];
    readonly tokenType?: Maybe<NftStandard>;
};
export type NftTradeInput = {
    readonly amount: Scalars['Int'];
    readonly contractAddress: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly marketplace: NftMarketplace;
    readonly quotePrice?: InputMaybe<TokenAmountInput>;
    readonly tokenId: Scalars['String'];
    readonly tokenType?: InputMaybe<NftStandard>;
};
export type NftTransfer = {
    readonly __typename?: 'NftTransfer';
    readonly asset: NftAsset;
    readonly direction: TransactionDirection;
    readonly id: Scalars['ID'];
    readonly nftStandard: NftStandard;
    readonly recipient: Scalars['String'];
    readonly sender: Scalars['String'];
};
export type NftTransferInput = {
    readonly asset: NftAssetInput;
    readonly direction: TransactionDirection;
    readonly nftStandard: NftStandard;
    readonly recipient: Scalars['String'];
    readonly sender: Scalars['String'];
};
export type OnRampServiceProvider = {
    readonly __typename?: 'OnRampServiceProvider';
    readonly id: Scalars['ID'];
    readonly logoDarkUrl: Scalars['String'];
    readonly logoLightUrl: Scalars['String'];
    readonly name: Scalars['String'];
    readonly serviceProvider: Scalars['String'];
    readonly supportUrl?: Maybe<Scalars['String']>;
    readonly url: Scalars['String'];
};
export type OnRampServiceProviderInput = {
    readonly logoDarkUrl: Scalars['String'];
    readonly logoLightUrl: Scalars['String'];
    readonly name: Scalars['String'];
    readonly serviceProvider: Scalars['String'];
    readonly supportUrl?: InputMaybe<Scalars['String']>;
    readonly url: Scalars['String'];
};
export type OnRampTransactionDetails = {
    readonly __typename?: 'OnRampTransactionDetails';
    readonly id: Scalars['ID'];
    readonly onRampTransfer: OnRampTransfer;
    readonly receiverAddress: Scalars['String'];
    readonly status: TransactionStatus;
};
export type OnRampTransactionDetailsInput = {
    readonly onRampTransfer: OnRampTransferInput;
    readonly receiverAddress: Scalars['String'];
    readonly status: TransactionStatus;
};
export type OnRampTransactionsAuth = {
    readonly queryParams: Scalars['String'];
    readonly signature: Scalars['String'];
};
export type OnRampTransfer = {
    readonly __typename?: 'OnRampTransfer';
    readonly amount: Scalars['Float'];
    readonly externalSessionId: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly networkFee?: Maybe<Scalars['Float']>;
    readonly serviceProvider: OnRampServiceProvider;
    readonly sourceAmount: Scalars['Float'];
    readonly sourceCurrency?: Maybe<Scalars['String']>;
    readonly token: Token;
    readonly tokenStandard: TokenStandard;
    readonly totalFee?: Maybe<Scalars['Float']>;
    readonly transactionFee?: Maybe<Scalars['Float']>;
    readonly transactionReferenceId: Scalars['String'];
};
export type OnRampTransferInput = {
    readonly amount: Scalars['Float'];
    readonly networkFee?: InputMaybe<Scalars['Float']>;
    readonly serviceProvider: OnRampServiceProviderInput;
    readonly sourceAmount: Scalars['Float'];
    readonly sourceCurrency?: InputMaybe<Scalars['String']>;
    readonly token: TokenAssetInput;
    readonly tokenStandard: TokenStandard;
    readonly totalFee?: InputMaybe<Scalars['Float']>;
    readonly transactionFee?: InputMaybe<Scalars['Float']>;
    readonly transactionReferenceId: Scalars['String'];
};
export declare enum OrderStatus {
    Cancelled = "CANCELLED",
    Executed = "EXECUTED",
    Expired = "EXPIRED",
    Valid = "VALID"
}
export declare enum OrderType {
    Listing = "LISTING",
    Offer = "OFFER"
}
export type PageInfo = {
    readonly __typename?: 'PageInfo';
    readonly endCursor?: Maybe<Scalars['String']>;
    readonly hasNextPage?: Maybe<Scalars['Boolean']>;
    readonly hasPreviousPage?: Maybe<Scalars['Boolean']>;
    readonly startCursor?: Maybe<Scalars['String']>;
};
/**   v2 pool parameters as defined by https://github.com/Uniswap/v2-sdk/blob/main/src/entities/pair.ts */
export type PairInput = {
    readonly tokenAmountA: TokenAmountInput;
    readonly tokenAmountB: TokenAmountInput;
};
export type PermitDetailsInput = {
    readonly amount: Scalars['String'];
    readonly expiration: Scalars['String'];
    readonly nonce: Scalars['String'];
    readonly token: Scalars['String'];
};
export type PermitInput = {
    readonly details: PermitDetailsInput;
    readonly sigDeadline: Scalars['String'];
    readonly signature: Scalars['String'];
    readonly spender: Scalars['String'];
};
/**   v3 pool parameters as defined by https://github.com/Uniswap/v3-sdk/blob/main/src/entities/pool.ts */
export type PoolInput = {
    readonly fee: Scalars['Int'];
    readonly liquidity: Scalars['String'];
    readonly sqrtRatioX96: Scalars['String'];
    readonly tickCurrent: Scalars['String'];
    readonly tokenA: TokenInput;
    readonly tokenB: TokenInput;
};
export type PoolTransaction = {
    readonly __typename?: 'PoolTransaction';
    readonly account: Scalars['String'];
    readonly chain: Chain;
    readonly hash: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly protocolVersion: ProtocolVersion;
    readonly timestamp: Scalars['Int'];
    readonly token0: Token;
    readonly token0Quantity: Scalars['String'];
    readonly token1: Token;
    readonly token1Quantity: Scalars['String'];
    readonly type: PoolTransactionType;
    readonly usdValue: Amount;
};
export declare enum PoolTransactionType {
    Add = "ADD",
    Remove = "REMOVE",
    Swap = "SWAP"
}
export type Portfolio = {
    readonly __typename?: 'Portfolio';
    readonly assetActivities?: Maybe<ReadonlyArray<Maybe<AssetActivity>>>;
    readonly id: Scalars['ID'];
    /**   TODO: (michael.zhang) replace with paginated query */
    readonly nftBalances?: Maybe<ReadonlyArray<Maybe<NftBalance>>>;
    readonly ownerAddress: Scalars['String'];
    readonly tokenBalances?: Maybe<ReadonlyArray<Maybe<TokenBalance>>>;
    readonly tokensTotalDenominatedValue?: Maybe<Amount>;
    readonly tokensTotalDenominatedValueChange?: Maybe<AmountChange>;
};
export type PortfolioAssetActivitiesArgs = {
    _fs?: InputMaybe<AssetActivitySwitch>;
    chains?: InputMaybe<ReadonlyArray<Chain>>;
    includeOffChain?: InputMaybe<Scalars['Boolean']>;
    onRampTransactionIDs?: InputMaybe<ReadonlyArray<Scalars['String']>>;
    onRampTransactionsAuth?: InputMaybe<OnRampTransactionsAuth>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};
export type PortfolioTokensTotalDenominatedValueChangeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
/**   Specify how the portfolio value should be calculated for each `ownerAddress`. */
export type PortfolioValueModifier = {
    readonly includeSmallBalances?: InputMaybe<Scalars['Boolean']>;
    readonly includeSpamTokens?: InputMaybe<Scalars['Boolean']>;
    readonly ownerAddress: Scalars['String'];
    readonly tokenExcludeOverrides?: InputMaybe<ReadonlyArray<ContractInput>>;
    readonly tokenIncludeOverrides?: InputMaybe<ReadonlyArray<ContractInput>>;
};
export declare enum PriceSource {
    SubgraphV2 = "SUBGRAPH_V2",
    SubgraphV3 = "SUBGRAPH_V3"
}
export declare enum ProtocolVersion {
    V2 = "V2",
    V3 = "V3"
}
export type PushNotification = {
    readonly __typename?: 'PushNotification';
    readonly contents: Scalars['AWSJSON'];
    readonly id: Scalars['ID'];
    readonly notifyAddress: Scalars['String'];
    readonly signerHeader: Scalars['AWSJSON'];
    readonly viewerHeader: Scalars['AWSJSON'];
};
export type Query = {
    readonly __typename?: 'Query';
    readonly convert?: Maybe<Amount>;
    readonly dailyProtocolTvl?: Maybe<ReadonlyArray<TimestampedAmount>>;
    readonly historicalProtocolVolume?: Maybe<ReadonlyArray<TimestampedAmount>>;
    readonly isV3SubgraphStale?: Maybe<Scalars['Boolean']>;
    readonly nftActivity?: Maybe<NftActivityConnection>;
    readonly nftAssets?: Maybe<NftAssetConnection>;
    readonly nftBalances?: Maybe<NftBalanceConnection>;
    readonly nftCollectionBalances?: Maybe<NftCollectionBalanceConnection>;
    readonly nftCollections?: Maybe<NftCollectionConnection>;
    readonly nftRoute?: Maybe<NftRouteResponse>;
    readonly portfolios?: Maybe<ReadonlyArray<Maybe<Portfolio>>>;
    readonly searchTokens?: Maybe<ReadonlyArray<Maybe<Token>>>;
    /**
     *  token consumes chain and address instead of contract because the apollo client request cache can only use
     * keys from the response, and the token response does not contain a contract, but does contain an unwrapped
     * contract: chain and address.
     */
    readonly token?: Maybe<Token>;
    readonly tokenProjects?: Maybe<ReadonlyArray<Maybe<TokenProject>>>;
    readonly tokens?: Maybe<ReadonlyArray<Maybe<Token>>>;
    readonly topCollections?: Maybe<NftCollectionConnection>;
    readonly topTokens?: Maybe<ReadonlyArray<Maybe<Token>>>;
    /**   returns top v2 pairs sorted by total value locked in desc order */
    readonly topV2Pairs?: Maybe<ReadonlyArray<V2Pair>>;
    /**   returns top v3 pools sorted by total value locked in desc order */
    readonly topV3Pools?: Maybe<ReadonlyArray<V3Pool>>;
    readonly transactionNotification?: Maybe<TransactionNotification>;
    readonly v2Pair?: Maybe<V2Pair>;
    readonly v2Transactions?: Maybe<ReadonlyArray<Maybe<PoolTransaction>>>;
    readonly v3Pool?: Maybe<V3Pool>;
    readonly v3PoolsForTokenPair?: Maybe<ReadonlyArray<V3Pool>>;
    readonly v3Transactions?: Maybe<ReadonlyArray<PoolTransaction>>;
};
export type QueryConvertArgs = {
    fromAmount: CurrencyAmountInput;
    toCurrency: Currency;
};
export type QueryDailyProtocolTvlArgs = {
    chain: Chain;
    version: ProtocolVersion;
};
export type QueryHistoricalProtocolVolumeArgs = {
    chain: Chain;
    duration: HistoryDuration;
    version: ProtocolVersion;
};
export type QueryIsV3SubgraphStaleArgs = {
    chain: Chain;
};
export type QueryNftActivityArgs = {
    after?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    filter?: InputMaybe<NftActivityFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
};
export type QueryNftAssetsArgs = {
    address: Scalars['String'];
    after?: InputMaybe<Scalars['String']>;
    asc?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    filter?: InputMaybe<NftAssetsFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<NftAssetSortableField>;
};
export type QueryNftBalancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    chains?: InputMaybe<ReadonlyArray<Chain>>;
    filter?: InputMaybe<NftBalancesFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    ownerAddress: Scalars['String'];
};
export type QueryNftCollectionBalancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    ownerAddress: Scalars['String'];
};
export type QueryNftCollectionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    filter?: InputMaybe<NftCollectionsFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
};
export type QueryNftRouteArgs = {
    chain?: InputMaybe<Chain>;
    nftTrades: ReadonlyArray<NftTradeInput>;
    senderAddress: Scalars['String'];
    tokenTrades?: InputMaybe<ReadonlyArray<TokenTradeInput>>;
};
export type QueryPortfoliosArgs = {
    chains?: InputMaybe<ReadonlyArray<Chain>>;
    lookupTokens?: InputMaybe<ReadonlyArray<ContractInput>>;
    ownerAddresses: ReadonlyArray<Scalars['String']>;
    valueModifiers?: InputMaybe<ReadonlyArray<PortfolioValueModifier>>;
};
export type QuerySearchTokensArgs = {
    chains?: InputMaybe<ReadonlyArray<Chain>>;
    searchQuery: Scalars['String'];
};
export type QueryTokenArgs = {
    address?: InputMaybe<Scalars['String']>;
    chain: Chain;
};
export type QueryTokenProjectsArgs = {
    contracts: ReadonlyArray<ContractInput>;
};
export type QueryTokensArgs = {
    contracts: ReadonlyArray<ContractInput>;
};
export type QueryTopCollectionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    chains?: InputMaybe<ReadonlyArray<Chain>>;
    cursor?: InputMaybe<Scalars['String']>;
    duration?: InputMaybe<HistoryDuration>;
    first?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollectionSortableField>;
};
export type QueryTopTokensArgs = {
    chain?: InputMaybe<Chain>;
    orderBy?: InputMaybe<TokenSortableField>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};
export type QueryTopV2PairsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    tokenFilter?: InputMaybe<Scalars['String']>;
    tvlCursor?: InputMaybe<Scalars['Float']>;
};
export type QueryTopV3PoolsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    tokenFilter?: InputMaybe<Scalars['String']>;
    tvlCursor?: InputMaybe<Scalars['Float']>;
};
export type QueryTransactionNotificationArgs = {
    address: Scalars['String'];
    chain: Chain;
    transactionHash: Scalars['String'];
};
export type QueryV2PairArgs = {
    address: Scalars['String'];
    chain: Chain;
};
export type QueryV2TransactionsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type QueryV3PoolArgs = {
    address: Scalars['String'];
    chain: Chain;
};
export type QueryV3PoolsForTokenPairArgs = {
    chain: Chain;
    token0: Scalars['String'];
    token1: Scalars['String'];
};
export type QueryV3TransactionsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export declare enum SafetyLevel {
    Blocked = "BLOCKED",
    MediumWarning = "MEDIUM_WARNING",
    StrongWarning = "STRONG_WARNING",
    Verified = "VERIFIED"
}
export type Status = {
    readonly __typename?: 'Status';
    readonly success: Scalars['Boolean'];
};
export type Subscription = {
    readonly __typename?: 'Subscription';
    readonly onAssetActivity?: Maybe<AssetActivity>;
};
export type SubscriptionOnAssetActivityArgs = {
    addresses: ReadonlyArray<Scalars['String']>;
    subscriptionId: Scalars['ID'];
};
export declare enum SubscriptionType {
    AssetActivity = "ASSET_ACTIVITY"
}
export type SwapOrderDetails = {
    readonly __typename?: 'SwapOrderDetails';
    readonly encodedOrder: Scalars['String'];
    readonly expiry: Scalars['Int'];
    readonly hash: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly inputToken: Token;
    readonly inputTokenQuantity: Scalars['String'];
    readonly offerer: Scalars['String'];
    readonly outputToken: Token;
    readonly outputTokenQuantity: Scalars['String'];
    /** @deprecated use swapOrderStatus to disambiguate from transactionStatus */
    readonly status: SwapOrderStatus;
    readonly swapOrderStatus: SwapOrderStatus;
    readonly swapOrderType: SwapOrderType;
};
export type SwapOrderDetailsInput = {
    readonly encodedOrder: Scalars['String'];
    readonly expiry: Scalars['Int'];
    readonly hash: Scalars['String'];
    readonly inputAmount: Scalars['String'];
    readonly inputToken: TokenAssetInput;
    readonly offerer: Scalars['String'];
    readonly outputAmount: Scalars['String'];
    readonly outputToken: TokenAssetInput;
    readonly status?: InputMaybe<SwapOrderStatus>;
    readonly swapOrderStatus: SwapOrderStatus;
    readonly swapOrderType: SwapOrderType;
};
export declare enum SwapOrderStatus {
    Cancelled = "CANCELLED",
    Error = "ERROR",
    Expired = "EXPIRED",
    Filled = "FILLED",
    InsufficientFunds = "INSUFFICIENT_FUNDS",
    Open = "OPEN"
}
export declare enum SwapOrderType {
    Dutch = "DUTCH",
    DutchV2 = "DUTCH_V2",
    Limit = "LIMIT"
}
export type TimestampedAmount = IAmount & {
    readonly __typename?: 'TimestampedAmount';
    readonly currency?: Maybe<Currency>;
    readonly id: Scalars['ID'];
    readonly timestamp: Scalars['Int'];
    readonly value: Scalars['Float'];
};
export type TimestampedOhlc = {
    readonly __typename?: 'TimestampedOhlc';
    readonly close: Amount;
    readonly high: Amount;
    readonly id: Scalars['ID'];
    readonly low: Amount;
    readonly open: Amount;
    readonly timestamp: Scalars['Int'];
};
export type TimestampedPoolPrice = {
    readonly __typename?: 'TimestampedPoolPrice';
    readonly id: Scalars['ID'];
    readonly timestamp: Scalars['Int'];
    readonly token0Price: Scalars['Float'];
    readonly token1Price: Scalars['Float'];
};
export type Token = IContract & {
    readonly __typename?: 'Token';
    readonly address?: Maybe<Scalars['String']>;
    readonly chain: Chain;
    readonly decimals?: Maybe<Scalars['Int']>;
    readonly feeData?: Maybe<FeeData>;
    readonly id: Scalars['ID'];
    readonly market?: Maybe<TokenMarket>;
    readonly name?: Maybe<Scalars['String']>;
    readonly project?: Maybe<TokenProject>;
    readonly standard?: Maybe<TokenStandard>;
    readonly symbol?: Maybe<Scalars['String']>;
    readonly v2Transactions?: Maybe<ReadonlyArray<Maybe<PoolTransaction>>>;
    readonly v3Transactions?: Maybe<ReadonlyArray<Maybe<PoolTransaction>>>;
};
export type TokenMarketArgs = {
    currency?: InputMaybe<Currency>;
};
export type TokenV2TransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type TokenV3TransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type TokenAmount = {
    readonly __typename?: 'TokenAmount';
    readonly currency: Currency;
    readonly id: Scalars['ID'];
    readonly value: Scalars['String'];
};
export type TokenAmountInput = {
    readonly amount: Scalars['String'];
    readonly token: TokenInput;
};
export type TokenApproval = {
    readonly __typename?: 'TokenApproval';
    readonly approvedAddress: Scalars['String'];
    /**   can be erc20 or native */
    readonly asset: Token;
    readonly id: Scalars['ID'];
    readonly quantity: Scalars['String'];
    readonly tokenStandard: TokenStandard;
};
export type TokenApprovalInput = {
    readonly approvedAddress: Scalars['String'];
    readonly asset: TokenAssetInput;
    readonly quantity: Scalars['String'];
    readonly tokenStandard: TokenStandard;
};
export type TokenAssetInput = {
    readonly address?: InputMaybe<Scalars['String']>;
    readonly chain: Chain;
    readonly decimals?: InputMaybe<Scalars['Int']>;
    readonly name?: InputMaybe<Scalars['String']>;
    readonly standard: TokenStandard;
    readonly symbol?: InputMaybe<Scalars['String']>;
};
export type TokenBalance = {
    readonly __typename?: 'TokenBalance';
    readonly blockNumber?: Maybe<Scalars['Int']>;
    readonly blockTimestamp?: Maybe<Scalars['Int']>;
    readonly denominatedValue?: Maybe<Amount>;
    readonly id: Scalars['ID'];
    readonly isHidden?: Maybe<Scalars['Boolean']>;
    readonly ownerAddress: Scalars['String'];
    readonly quantity?: Maybe<Scalars['Float']>;
    readonly token?: Maybe<Token>;
    readonly tokenProjectMarket?: Maybe<TokenProjectMarket>;
};
export type TokenInput = {
    readonly address: Scalars['String'];
    readonly chainId: Scalars['Int'];
    readonly decimals: Scalars['Int'];
    readonly isNative: Scalars['Boolean'];
};
export type TokenMarket = {
    readonly __typename?: 'TokenMarket';
    readonly fullyDilutedValuation?: Maybe<Amount>;
    readonly historicalTvl?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly historicalVolume?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly id: Scalars['ID'];
    readonly ohlc?: Maybe<ReadonlyArray<Maybe<TimestampedOhlc>>>;
    readonly price?: Maybe<Amount>;
    readonly priceHighLow?: Maybe<Amount>;
    readonly priceHistory?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly pricePercentChange?: Maybe<Amount>;
    readonly priceSource: PriceSource;
    readonly token: Token;
    readonly totalValueLocked?: Maybe<Amount>;
    /**   this volume is cumulative volume over the specified duration */
    readonly volume?: Maybe<Amount>;
};
export type TokenMarketHistoricalTvlArgs = {
    duration: HistoryDuration;
};
export type TokenMarketHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type TokenMarketOhlcArgs = {
    duration: HistoryDuration;
};
export type TokenMarketPriceHighLowArgs = {
    duration: HistoryDuration;
    highLow: HighLow;
};
export type TokenMarketPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type TokenMarketPricePercentChangeArgs = {
    duration: HistoryDuration;
};
export type TokenMarketVolumeArgs = {
    duration: HistoryDuration;
};
export type TokenProject = {
    readonly __typename?: 'TokenProject';
    readonly description?: Maybe<Scalars['String']>;
    readonly descriptionTranslations?: Maybe<DescriptionTranslations>;
    readonly homepageUrl?: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly isSpam?: Maybe<Scalars['Boolean']>;
    readonly logo?: Maybe<Image>;
    /** @deprecated use logo */
    readonly logoUrl?: Maybe<Scalars['String']>;
    readonly markets?: Maybe<ReadonlyArray<Maybe<TokenProjectMarket>>>;
    readonly name?: Maybe<Scalars['String']>;
    readonly safetyLevel?: Maybe<SafetyLevel>;
    /** @deprecated use logo */
    readonly smallLogo?: Maybe<Image>;
    readonly spamCode?: Maybe<Scalars['Int']>;
    readonly tokens: ReadonlyArray<Token>;
    readonly twitterName?: Maybe<Scalars['String']>;
};
export type TokenProjectMarketsArgs = {
    currencies: ReadonlyArray<Currency>;
};
export type TokenProjectMarket = {
    readonly __typename?: 'TokenProjectMarket';
    readonly currency: Currency;
    readonly fullyDilutedValuation?: Maybe<Amount>;
    readonly id: Scalars['ID'];
    readonly marketCap?: Maybe<Amount>;
    readonly price?: Maybe<Amount>;
    readonly priceHigh52w?: Maybe<Amount>;
    readonly priceHighLow?: Maybe<Amount>;
    readonly priceHistory?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly priceLow52w?: Maybe<Amount>;
    readonly pricePercentChange?: Maybe<Amount>;
    readonly pricePercentChange24h?: Maybe<Amount>;
    readonly tokenProject: TokenProject;
};
export type TokenProjectMarketPriceHighLowArgs = {
    duration: HistoryDuration;
    highLow: HighLow;
};
export type TokenProjectMarketPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type TokenProjectMarketPricePercentChangeArgs = {
    duration: HistoryDuration;
};
export declare enum TokenSortableField {
    MarketCap = "MARKET_CAP",
    Popularity = "POPULARITY",
    TotalValueLocked = "TOTAL_VALUE_LOCKED",
    Volume = "VOLUME"
}
export declare enum TokenStandard {
    Erc20 = "ERC20",
    Native = "NATIVE"
}
export type TokenTradeInput = {
    readonly permit?: InputMaybe<PermitInput>;
    readonly routes?: InputMaybe<TokenTradeRoutesInput>;
    readonly slippageToleranceBasisPoints?: InputMaybe<Scalars['Int']>;
    readonly tokenAmount: TokenAmountInput;
};
export type TokenTradeRouteInput = {
    readonly inputAmount: TokenAmountInput;
    readonly outputAmount: TokenAmountInput;
    readonly pools: ReadonlyArray<TradePoolInput>;
};
export type TokenTradeRoutesInput = {
    readonly mixedRoutes?: InputMaybe<ReadonlyArray<TokenTradeRouteInput>>;
    readonly tradeType: TokenTradeType;
    readonly v2Routes?: InputMaybe<ReadonlyArray<TokenTradeRouteInput>>;
    readonly v3Routes?: InputMaybe<ReadonlyArray<TokenTradeRouteInput>>;
};
export declare enum TokenTradeType {
    ExactInput = "EXACT_INPUT",
    ExactOutput = "EXACT_OUTPUT"
}
export type TokenTransfer = {
    readonly __typename?: 'TokenTransfer';
    readonly asset: Token;
    readonly direction: TransactionDirection;
    readonly id: Scalars['ID'];
    readonly quantity: Scalars['String'];
    readonly recipient: Scalars['String'];
    readonly sender: Scalars['String'];
    readonly tokenStandard: TokenStandard;
    readonly transactedValue?: Maybe<Amount>;
};
export type TokenTransferInput = {
    readonly asset: TokenAssetInput;
    readonly direction: TransactionDirection;
    readonly quantity: Scalars['String'];
    readonly recipient: Scalars['String'];
    readonly sender: Scalars['String'];
    readonly tokenStandard: TokenStandard;
    readonly transactedValue?: InputMaybe<AmountInput>;
};
export type TradePoolInput = {
    readonly pair?: InputMaybe<PairInput>;
    readonly pool?: InputMaybe<PoolInput>;
};
export type Transaction = {
    readonly __typename?: 'Transaction';
    readonly blockNumber: Scalars['Int'];
    readonly from: Scalars['String'];
    readonly gasLimit?: Maybe<Scalars['Float']>;
    readonly hash: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly maxFeePerGas?: Maybe<Scalars['Float']>;
    readonly nonce: Scalars['Int'];
    readonly status: TransactionStatus;
    readonly to: Scalars['String'];
};
export type TransactionDetails = {
    readonly __typename?: 'TransactionDetails';
    readonly application?: Maybe<ApplicationContract>;
    readonly assetChanges: ReadonlyArray<Maybe<AssetChange>>;
    readonly from: Scalars['String'];
    readonly hash: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly networkFee?: Maybe<NetworkFee>;
    readonly nonce: Scalars['Int'];
    /** @deprecated use transactionStatus to disambiguate from swapOrderStatus */
    readonly status: TransactionStatus;
    readonly to: Scalars['String'];
    readonly transactionStatus: TransactionStatus;
    readonly type: TransactionType;
};
export type TransactionDetailsInput = {
    readonly application?: InputMaybe<ApplicationContractInput>;
    readonly assetChanges: ReadonlyArray<InputMaybe<AssetChangeInput>>;
    readonly from: Scalars['String'];
    readonly hash: Scalars['String'];
    readonly nonce: Scalars['Int'];
    readonly status?: InputMaybe<TransactionStatus>;
    readonly to: Scalars['String'];
    readonly transactionStatus: TransactionStatus;
    readonly type: TransactionType;
};
export declare enum TransactionDirection {
    In = "IN",
    Out = "OUT",
    Self = "SELF"
}
export type TransactionNotification = {
    readonly __typename?: 'TransactionNotification';
    readonly hash: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly push: ReadonlyArray<PushNotification>;
};
export declare enum TransactionStatus {
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Pending = "PENDING"
}
export declare enum TransactionType {
    Approve = "APPROVE",
    Borrow = "BORROW",
    Cancel = "CANCEL",
    Claim = "CLAIM",
    Deployment = "DEPLOYMENT",
    Lend = "LEND",
    Mint = "MINT",
    OnRamp = "ON_RAMP",
    Receive = "RECEIVE",
    Repay = "REPAY",
    Send = "SEND",
    Stake = "STAKE",
    Swap = "SWAP",
    SwapOrder = "SWAP_ORDER",
    Unknown = "UNKNOWN",
    Unstake = "UNSTAKE",
    Withdraw = "WITHDRAW"
}
export type V2Pair = IPool & {
    readonly __typename?: 'V2Pair';
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly createdAtTimestamp?: Maybe<Scalars['Int']>;
    readonly cumulativeVolume?: Maybe<Amount>;
    readonly historicalVolume?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly id: Scalars['ID'];
    readonly priceHistory?: Maybe<ReadonlyArray<Maybe<TimestampedPoolPrice>>>;
    readonly protocolVersion: ProtocolVersion;
    readonly token0?: Maybe<Token>;
    readonly token0Supply?: Maybe<Scalars['Float']>;
    readonly token1?: Maybe<Token>;
    readonly token1Supply?: Maybe<Scalars['Float']>;
    readonly totalLiquidity?: Maybe<Amount>;
    readonly totalLiquidityPercentChange24h?: Maybe<Amount>;
    readonly transactions?: Maybe<ReadonlyArray<Maybe<PoolTransaction>>>;
    readonly txCount?: Maybe<Scalars['Int']>;
};
export type V2PairCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type V2PairHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type V2PairPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type V2PairTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type V3Pool = IPool & {
    readonly __typename?: 'V3Pool';
    readonly address: Scalars['String'];
    readonly chain: Chain;
    readonly createdAtTimestamp?: Maybe<Scalars['Int']>;
    readonly cumulativeVolume?: Maybe<Amount>;
    readonly feeTier?: Maybe<Scalars['Float']>;
    readonly historicalVolume?: Maybe<ReadonlyArray<Maybe<TimestampedAmount>>>;
    readonly id: Scalars['ID'];
    readonly priceHistory?: Maybe<ReadonlyArray<Maybe<TimestampedPoolPrice>>>;
    readonly protocolVersion: ProtocolVersion;
    readonly ticks?: Maybe<ReadonlyArray<Maybe<V3PoolTick>>>;
    readonly token0?: Maybe<Token>;
    readonly token0Supply?: Maybe<Scalars['Float']>;
    readonly token1?: Maybe<Token>;
    readonly token1Supply?: Maybe<Scalars['Float']>;
    readonly totalLiquidity?: Maybe<Amount>;
    readonly totalLiquidityPercentChange24h?: Maybe<Amount>;
    readonly transactions?: Maybe<ReadonlyArray<Maybe<PoolTransaction>>>;
    readonly txCount?: Maybe<Scalars['Int']>;
};
export type V3PoolCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type V3PoolHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type V3PoolPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type V3PoolTicksArgs = {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export type V3PoolTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type V3PoolTick = {
    readonly __typename?: 'V3PoolTick';
    readonly id: Scalars['ID'];
    readonly liquidityGross?: Maybe<Scalars['String']>;
    readonly liquidityNet?: Maybe<Scalars['String']>;
    readonly price0?: Maybe<Scalars['String']>;
    readonly price1?: Maybe<Scalars['String']>;
    readonly tickIdx?: Maybe<Scalars['Int']>;
};
export type ConvertQueryVariables = Exact<{
    toCurrency: Currency;
}>;
export type ConvertQuery = {
    readonly __typename?: 'Query';
    readonly convert?: {
        readonly __typename?: 'Amount';
        readonly id: string;
        readonly value: number;
        readonly currency?: Currency;
    };
};
export type RecentlySearchedAssetsQueryVariables = Exact<{
    collectionAddresses: ReadonlyArray<Scalars['String']> | Scalars['String'];
    contracts: ReadonlyArray<ContractInput> | ContractInput;
}>;
export type RecentlySearchedAssetsQuery = {
    readonly __typename?: 'Query';
    readonly nftCollections?: {
        readonly __typename?: 'NftCollectionConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftCollectionEdge';
            readonly node: {
                readonly __typename?: 'NftCollection';
                readonly collectionId: string;
                readonly isVerified?: boolean;
                readonly name?: string;
                readonly numAssets?: number;
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly nftContracts?: ReadonlyArray<{
                    readonly __typename?: 'NftContract';
                    readonly address: string;
                }>;
                readonly markets?: ReadonlyArray<{
                    readonly __typename?: 'NftCollectionMarket';
                    readonly floorPrice?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly currency?: Currency;
                        readonly value: number;
                    };
                }>;
            };
        }>;
    };
    readonly tokens?: ReadonlyArray<{
        readonly __typename?: 'Token';
        readonly id: string;
        readonly decimals?: number;
        readonly name?: string;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly address?: string;
        readonly symbol?: string;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly price?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly pricePercentChange?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
            readonly volume24H?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
        };
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly logoUrl?: string;
            readonly safetyLevel?: SafetyLevel;
        };
    }>;
};
export type SearchTokensQueryVariables = Exact<{
    searchQuery: Scalars['String'];
}>;
export type SearchTokensQuery = {
    readonly __typename?: 'Query';
    readonly searchTokens?: ReadonlyArray<{
        readonly __typename?: 'Token';
        readonly id: string;
        readonly decimals?: number;
        readonly name?: string;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly address?: string;
        readonly symbol?: string;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly price?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly pricePercentChange?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
            readonly volume24H?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
        };
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly logoUrl?: string;
            readonly safetyLevel?: SafetyLevel;
        };
    }>;
};
export type TokenQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenQuery = {
    readonly __typename?: 'Query';
    readonly token?: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly decimals?: number;
        readonly name?: string;
        readonly chain: Chain;
        readonly address?: string;
        readonly symbol?: string;
        readonly standard?: TokenStandard;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly totalValueLocked?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly price?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly volume24H?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly priceHigh52W?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
            readonly priceLow52W?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
        };
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly description?: string;
            readonly homepageUrl?: string;
            readonly twitterName?: string;
            readonly logoUrl?: string;
            readonly tokens: ReadonlyArray<{
                readonly __typename?: 'Token';
                readonly id: string;
                readonly chain: Chain;
                readonly address?: string;
            }>;
        };
    };
};
export type TokenPriceQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
    duration: HistoryDuration;
}>;
export type TokenPriceQuery = {
    readonly __typename?: 'Query';
    readonly token?: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly address?: string;
        readonly chain: Chain;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly price?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
            readonly priceHistory?: ReadonlyArray<{
                readonly __typename?: 'TimestampedAmount';
                readonly id: string;
                readonly timestamp: number;
                readonly value: number;
            }>;
        };
    };
};
export type UniswapPricesQueryVariables = Exact<{
    contracts: ReadonlyArray<ContractInput> | ContractInput;
}>;
export type UniswapPricesQuery = {
    readonly __typename?: 'Query';
    readonly tokens?: ReadonlyArray<{
        readonly __typename?: 'Token';
        readonly id: string;
        readonly address?: string;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly markets?: ReadonlyArray<{
                readonly __typename?: 'TokenProjectMarket';
                readonly id: string;
                readonly price?: {
                    readonly __typename?: 'Amount';
                    readonly id: string;
                    readonly value: number;
                };
            }>;
        };
    }>;
};
export type TokenSpotPriceQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenSpotPriceQuery = {
    readonly __typename?: 'Query';
    readonly token?: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly address?: string;
        readonly chain: Chain;
        readonly name?: string;
        readonly symbol?: string;
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly markets?: ReadonlyArray<{
                readonly __typename?: 'TokenProjectMarket';
                readonly id: string;
                readonly price?: {
                    readonly __typename?: 'Amount';
                    readonly id: string;
                    readonly value: number;
                };
            }>;
        };
    };
};
export type TopTokens100QueryVariables = Exact<{
    duration: HistoryDuration;
    chain: Chain;
}>;
export type TopTokens100Query = {
    readonly __typename?: 'Query';
    readonly topTokens?: ReadonlyArray<{
        readonly __typename?: 'Token';
        readonly id: string;
        readonly name?: string;
        readonly chain: Chain;
        readonly address?: string;
        readonly symbol?: string;
        readonly standard?: TokenStandard;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly totalValueLocked?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly price?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly pricePercentChange?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly currency?: Currency;
                readonly value: number;
            };
            readonly volume?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
        };
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly logoUrl?: string;
        };
    }>;
};
export type TopTokensSparklineQueryVariables = Exact<{
    duration: HistoryDuration;
    chain: Chain;
}>;
export type TopTokensSparklineQuery = {
    readonly __typename?: 'Query';
    readonly topTokens?: ReadonlyArray<{
        readonly __typename?: 'Token';
        readonly id: string;
        readonly address?: string;
        readonly chain: Chain;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly priceHistory?: ReadonlyArray<{
                readonly __typename?: 'TimestampedAmount';
                readonly id: string;
                readonly timestamp: number;
                readonly value: number;
            }>;
        };
    }>;
};
export type TrendingTokensQueryVariables = Exact<{
    chain: Chain;
}>;
export type TrendingTokensQuery = {
    readonly __typename?: 'Query';
    readonly topTokens?: ReadonlyArray<{
        readonly __typename?: 'Token';
        readonly id: string;
        readonly decimals?: number;
        readonly name?: string;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly address?: string;
        readonly symbol?: string;
        readonly market?: {
            readonly __typename?: 'TokenMarket';
            readonly id: string;
            readonly price?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
            readonly pricePercentChange?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
            readonly volume24H?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
                readonly currency?: Currency;
            };
        };
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly logoUrl?: string;
            readonly safetyLevel?: SafetyLevel;
        };
    }>;
};
export type NftAssetPartsFragment = {
    readonly __typename?: 'NftAsset';
    readonly id: string;
    readonly name?: string;
    readonly tokenId: string;
    readonly nftContract?: {
        readonly __typename?: 'NftContract';
        readonly id: string;
        readonly chain: Chain;
        readonly address: string;
    };
    readonly image?: {
        readonly __typename?: 'Image';
        readonly id: string;
        readonly url: string;
    };
    readonly collection?: {
        readonly __typename?: 'NftCollection';
        readonly id: string;
        readonly name?: string;
    };
};
export type NftTransferPartsFragment = {
    readonly __typename?: 'NftTransfer';
    readonly id: string;
    readonly nftStandard: NftStandard;
    readonly sender: string;
    readonly recipient: string;
    readonly direction: TransactionDirection;
    readonly asset: {
        readonly __typename?: 'NftAsset';
        readonly id: string;
        readonly name?: string;
        readonly tokenId: string;
        readonly nftContract?: {
            readonly __typename?: 'NftContract';
            readonly id: string;
            readonly chain: Chain;
            readonly address: string;
        };
        readonly image?: {
            readonly __typename?: 'Image';
            readonly id: string;
            readonly url: string;
        };
        readonly collection?: {
            readonly __typename?: 'NftCollection';
            readonly id: string;
            readonly name?: string;
        };
    };
};
export type TokenAssetPartsFragment = {
    readonly __typename?: 'Token';
    readonly id: string;
    readonly name?: string;
    readonly symbol?: string;
    readonly address?: string;
    readonly decimals?: number;
    readonly chain: Chain;
    readonly standard?: TokenStandard;
    readonly project?: {
        readonly __typename?: 'TokenProject';
        readonly id: string;
        readonly isSpam?: boolean;
        readonly logo?: {
            readonly __typename?: 'Image';
            readonly id: string;
            readonly url: string;
        };
    };
};
export type TokenTransferPartsFragment = {
    readonly __typename?: 'TokenTransfer';
    readonly id: string;
    readonly tokenStandard: TokenStandard;
    readonly quantity: string;
    readonly sender: string;
    readonly recipient: string;
    readonly direction: TransactionDirection;
    readonly asset: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly name?: string;
        readonly symbol?: string;
        readonly address?: string;
        readonly decimals?: number;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly isSpam?: boolean;
            readonly logo?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
        };
    };
    readonly transactedValue?: {
        readonly __typename?: 'Amount';
        readonly id: string;
        readonly currency?: Currency;
        readonly value: number;
    };
};
export type TokenApprovalPartsFragment = {
    readonly __typename?: 'TokenApproval';
    readonly id: string;
    readonly tokenStandard: TokenStandard;
    readonly approvedAddress: string;
    readonly quantity: string;
    readonly asset: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly name?: string;
        readonly symbol?: string;
        readonly address?: string;
        readonly decimals?: number;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly isSpam?: boolean;
            readonly logo?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
        };
    };
};
export type NftApprovalPartsFragment = {
    readonly __typename?: 'NftApproval';
    readonly id: string;
    readonly nftStandard: NftStandard;
    readonly approvedAddress: string;
    readonly asset: {
        readonly __typename?: 'NftAsset';
        readonly id: string;
        readonly name?: string;
        readonly tokenId: string;
        readonly nftContract?: {
            readonly __typename?: 'NftContract';
            readonly id: string;
            readonly chain: Chain;
            readonly address: string;
        };
        readonly image?: {
            readonly __typename?: 'Image';
            readonly id: string;
            readonly url: string;
        };
        readonly collection?: {
            readonly __typename?: 'NftCollection';
            readonly id: string;
            readonly name?: string;
        };
    };
};
export type NftApproveForAllPartsFragment = {
    readonly __typename?: 'NftApproveForAll';
    readonly id: string;
    readonly nftStandard: NftStandard;
    readonly operatorAddress: string;
    readonly approved: boolean;
    readonly asset: {
        readonly __typename?: 'NftAsset';
        readonly id: string;
        readonly name?: string;
        readonly tokenId: string;
        readonly nftContract?: {
            readonly __typename?: 'NftContract';
            readonly id: string;
            readonly chain: Chain;
            readonly address: string;
        };
        readonly image?: {
            readonly __typename?: 'Image';
            readonly id: string;
            readonly url: string;
        };
        readonly collection?: {
            readonly __typename?: 'NftCollection';
            readonly id: string;
            readonly name?: string;
        };
    };
};
export type TransactionPartsFragment = {
    readonly __typename?: 'Transaction';
    readonly id: string;
    readonly blockNumber: number;
    readonly hash: string;
    readonly status: TransactionStatus;
    readonly to: string;
    readonly from: string;
    readonly nonce: number;
};
export type TransactionDetailsPartsFragment = {
    readonly __typename?: 'TransactionDetails';
    readonly id: string;
    readonly type: TransactionType;
    readonly from: string;
    readonly to: string;
    readonly hash: string;
    readonly nonce: number;
    readonly status: TransactionStatus;
    readonly assetChanges: ReadonlyArray<{
        readonly __typename: 'NftApproval';
        readonly id: string;
        readonly nftStandard: NftStandard;
        readonly approvedAddress: string;
        readonly asset: {
            readonly __typename?: 'NftAsset';
            readonly id: string;
            readonly name?: string;
            readonly tokenId: string;
            readonly nftContract?: {
                readonly __typename?: 'NftContract';
                readonly id: string;
                readonly chain: Chain;
                readonly address: string;
            };
            readonly image?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
            readonly collection?: {
                readonly __typename?: 'NftCollection';
                readonly id: string;
                readonly name?: string;
            };
        };
    } | {
        readonly __typename: 'NftApproveForAll';
        readonly id: string;
        readonly nftStandard: NftStandard;
        readonly operatorAddress: string;
        readonly approved: boolean;
        readonly asset: {
            readonly __typename?: 'NftAsset';
            readonly id: string;
            readonly name?: string;
            readonly tokenId: string;
            readonly nftContract?: {
                readonly __typename?: 'NftContract';
                readonly id: string;
                readonly chain: Chain;
                readonly address: string;
            };
            readonly image?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
            readonly collection?: {
                readonly __typename?: 'NftCollection';
                readonly id: string;
                readonly name?: string;
            };
        };
    } | {
        readonly __typename: 'NftTransfer';
        readonly id: string;
        readonly nftStandard: NftStandard;
        readonly sender: string;
        readonly recipient: string;
        readonly direction: TransactionDirection;
        readonly asset: {
            readonly __typename?: 'NftAsset';
            readonly id: string;
            readonly name?: string;
            readonly tokenId: string;
            readonly nftContract?: {
                readonly __typename?: 'NftContract';
                readonly id: string;
                readonly chain: Chain;
                readonly address: string;
            };
            readonly image?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
            readonly collection?: {
                readonly __typename?: 'NftCollection';
                readonly id: string;
                readonly name?: string;
            };
        };
    } | {
        readonly __typename: 'OnRampTransfer';
    } | {
        readonly __typename: 'TokenApproval';
        readonly id: string;
        readonly tokenStandard: TokenStandard;
        readonly approvedAddress: string;
        readonly quantity: string;
        readonly asset: {
            readonly __typename?: 'Token';
            readonly id: string;
            readonly name?: string;
            readonly symbol?: string;
            readonly address?: string;
            readonly decimals?: number;
            readonly chain: Chain;
            readonly standard?: TokenStandard;
            readonly project?: {
                readonly __typename?: 'TokenProject';
                readonly id: string;
                readonly isSpam?: boolean;
                readonly logo?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
            };
        };
    } | {
        readonly __typename: 'TokenTransfer';
        readonly id: string;
        readonly tokenStandard: TokenStandard;
        readonly quantity: string;
        readonly sender: string;
        readonly recipient: string;
        readonly direction: TransactionDirection;
        readonly asset: {
            readonly __typename?: 'Token';
            readonly id: string;
            readonly name?: string;
            readonly symbol?: string;
            readonly address?: string;
            readonly decimals?: number;
            readonly chain: Chain;
            readonly standard?: TokenStandard;
            readonly project?: {
                readonly __typename?: 'TokenProject';
                readonly id: string;
                readonly isSpam?: boolean;
                readonly logo?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
            };
        };
        readonly transactedValue?: {
            readonly __typename?: 'Amount';
            readonly id: string;
            readonly currency?: Currency;
            readonly value: number;
        };
    }>;
};
export type SwapOrderDetailsPartsFragment = {
    readonly __typename?: 'SwapOrderDetails';
    readonly id: string;
    readonly offerer: string;
    readonly hash: string;
    readonly inputTokenQuantity: string;
    readonly outputTokenQuantity: string;
    readonly orderStatus: SwapOrderStatus;
    readonly inputToken: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly name?: string;
        readonly symbol?: string;
        readonly address?: string;
        readonly decimals?: number;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly isSpam?: boolean;
            readonly logo?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
        };
    };
    readonly outputToken: {
        readonly __typename?: 'Token';
        readonly id: string;
        readonly name?: string;
        readonly symbol?: string;
        readonly address?: string;
        readonly decimals?: number;
        readonly chain: Chain;
        readonly standard?: TokenStandard;
        readonly project?: {
            readonly __typename?: 'TokenProject';
            readonly id: string;
            readonly isSpam?: boolean;
            readonly logo?: {
                readonly __typename?: 'Image';
                readonly id: string;
                readonly url: string;
            };
        };
    };
};
export type AssetActivityPartsFragment = {
    readonly __typename?: 'AssetActivity';
    readonly id: string;
    readonly timestamp: number;
    readonly chain: Chain;
    readonly details: {
        readonly __typename: 'OnRampTransactionDetails';
    } | {
        readonly __typename: 'SwapOrderDetails';
        readonly id: string;
        readonly offerer: string;
        readonly hash: string;
        readonly inputTokenQuantity: string;
        readonly outputTokenQuantity: string;
        readonly orderStatus: SwapOrderStatus;
        readonly inputToken: {
            readonly __typename?: 'Token';
            readonly id: string;
            readonly name?: string;
            readonly symbol?: string;
            readonly address?: string;
            readonly decimals?: number;
            readonly chain: Chain;
            readonly standard?: TokenStandard;
            readonly project?: {
                readonly __typename?: 'TokenProject';
                readonly id: string;
                readonly isSpam?: boolean;
                readonly logo?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
            };
        };
        readonly outputToken: {
            readonly __typename?: 'Token';
            readonly id: string;
            readonly name?: string;
            readonly symbol?: string;
            readonly address?: string;
            readonly decimals?: number;
            readonly chain: Chain;
            readonly standard?: TokenStandard;
            readonly project?: {
                readonly __typename?: 'TokenProject';
                readonly id: string;
                readonly isSpam?: boolean;
                readonly logo?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
            };
        };
    } | {
        readonly __typename: 'TransactionDetails';
        readonly id: string;
        readonly type: TransactionType;
        readonly from: string;
        readonly to: string;
        readonly hash: string;
        readonly nonce: number;
        readonly status: TransactionStatus;
        readonly assetChanges: ReadonlyArray<{
            readonly __typename: 'NftApproval';
            readonly id: string;
            readonly nftStandard: NftStandard;
            readonly approvedAddress: string;
            readonly asset: {
                readonly __typename?: 'NftAsset';
                readonly id: string;
                readonly name?: string;
                readonly tokenId: string;
                readonly nftContract?: {
                    readonly __typename?: 'NftContract';
                    readonly id: string;
                    readonly chain: Chain;
                    readonly address: string;
                };
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
                readonly collection?: {
                    readonly __typename?: 'NftCollection';
                    readonly id: string;
                    readonly name?: string;
                };
            };
        } | {
            readonly __typename: 'NftApproveForAll';
            readonly id: string;
            readonly nftStandard: NftStandard;
            readonly operatorAddress: string;
            readonly approved: boolean;
            readonly asset: {
                readonly __typename?: 'NftAsset';
                readonly id: string;
                readonly name?: string;
                readonly tokenId: string;
                readonly nftContract?: {
                    readonly __typename?: 'NftContract';
                    readonly id: string;
                    readonly chain: Chain;
                    readonly address: string;
                };
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
                readonly collection?: {
                    readonly __typename?: 'NftCollection';
                    readonly id: string;
                    readonly name?: string;
                };
            };
        } | {
            readonly __typename: 'NftTransfer';
            readonly id: string;
            readonly nftStandard: NftStandard;
            readonly sender: string;
            readonly recipient: string;
            readonly direction: TransactionDirection;
            readonly asset: {
                readonly __typename?: 'NftAsset';
                readonly id: string;
                readonly name?: string;
                readonly tokenId: string;
                readonly nftContract?: {
                    readonly __typename?: 'NftContract';
                    readonly id: string;
                    readonly chain: Chain;
                    readonly address: string;
                };
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly id: string;
                    readonly url: string;
                };
                readonly collection?: {
                    readonly __typename?: 'NftCollection';
                    readonly id: string;
                    readonly name?: string;
                };
            };
        } | {
            readonly __typename: 'OnRampTransfer';
        } | {
            readonly __typename: 'TokenApproval';
            readonly id: string;
            readonly tokenStandard: TokenStandard;
            readonly approvedAddress: string;
            readonly quantity: string;
            readonly asset: {
                readonly __typename?: 'Token';
                readonly id: string;
                readonly name?: string;
                readonly symbol?: string;
                readonly address?: string;
                readonly decimals?: number;
                readonly chain: Chain;
                readonly standard?: TokenStandard;
                readonly project?: {
                    readonly __typename?: 'TokenProject';
                    readonly id: string;
                    readonly isSpam?: boolean;
                    readonly logo?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                };
            };
        } | {
            readonly __typename: 'TokenTransfer';
            readonly id: string;
            readonly tokenStandard: TokenStandard;
            readonly quantity: string;
            readonly sender: string;
            readonly recipient: string;
            readonly direction: TransactionDirection;
            readonly asset: {
                readonly __typename?: 'Token';
                readonly id: string;
                readonly name?: string;
                readonly symbol?: string;
                readonly address?: string;
                readonly decimals?: number;
                readonly chain: Chain;
                readonly standard?: TokenStandard;
                readonly project?: {
                    readonly __typename?: 'TokenProject';
                    readonly id: string;
                    readonly isSpam?: boolean;
                    readonly logo?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                };
            };
            readonly transactedValue?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly currency?: Currency;
                readonly value: number;
            };
        }>;
    };
};
export type ActivityQueryVariables = Exact<{
    account: Scalars['String'];
}>;
export type ActivityQuery = {
    readonly __typename?: 'Query';
    readonly portfolios?: ReadonlyArray<{
        readonly __typename?: 'Portfolio';
        readonly id: string;
        readonly assetActivities?: ReadonlyArray<{
            readonly __typename?: 'AssetActivity';
            readonly id: string;
            readonly timestamp: number;
            readonly chain: Chain;
            readonly details: {
                readonly __typename: 'OnRampTransactionDetails';
            } | {
                readonly __typename: 'SwapOrderDetails';
                readonly id: string;
                readonly offerer: string;
                readonly hash: string;
                readonly inputTokenQuantity: string;
                readonly outputTokenQuantity: string;
                readonly orderStatus: SwapOrderStatus;
                readonly inputToken: {
                    readonly __typename?: 'Token';
                    readonly id: string;
                    readonly name?: string;
                    readonly symbol?: string;
                    readonly address?: string;
                    readonly decimals?: number;
                    readonly chain: Chain;
                    readonly standard?: TokenStandard;
                    readonly project?: {
                        readonly __typename?: 'TokenProject';
                        readonly id: string;
                        readonly isSpam?: boolean;
                        readonly logo?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                    };
                };
                readonly outputToken: {
                    readonly __typename?: 'Token';
                    readonly id: string;
                    readonly name?: string;
                    readonly symbol?: string;
                    readonly address?: string;
                    readonly decimals?: number;
                    readonly chain: Chain;
                    readonly standard?: TokenStandard;
                    readonly project?: {
                        readonly __typename?: 'TokenProject';
                        readonly id: string;
                        readonly isSpam?: boolean;
                        readonly logo?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                    };
                };
            } | {
                readonly __typename: 'TransactionDetails';
                readonly id: string;
                readonly type: TransactionType;
                readonly from: string;
                readonly to: string;
                readonly hash: string;
                readonly nonce: number;
                readonly status: TransactionStatus;
                readonly assetChanges: ReadonlyArray<{
                    readonly __typename: 'NftApproval';
                    readonly id: string;
                    readonly nftStandard: NftStandard;
                    readonly approvedAddress: string;
                    readonly asset: {
                        readonly __typename?: 'NftAsset';
                        readonly id: string;
                        readonly name?: string;
                        readonly tokenId: string;
                        readonly nftContract?: {
                            readonly __typename?: 'NftContract';
                            readonly id: string;
                            readonly chain: Chain;
                            readonly address: string;
                        };
                        readonly image?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                        readonly collection?: {
                            readonly __typename?: 'NftCollection';
                            readonly id: string;
                            readonly name?: string;
                        };
                    };
                } | {
                    readonly __typename: 'NftApproveForAll';
                    readonly id: string;
                    readonly nftStandard: NftStandard;
                    readonly operatorAddress: string;
                    readonly approved: boolean;
                    readonly asset: {
                        readonly __typename?: 'NftAsset';
                        readonly id: string;
                        readonly name?: string;
                        readonly tokenId: string;
                        readonly nftContract?: {
                            readonly __typename?: 'NftContract';
                            readonly id: string;
                            readonly chain: Chain;
                            readonly address: string;
                        };
                        readonly image?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                        readonly collection?: {
                            readonly __typename?: 'NftCollection';
                            readonly id: string;
                            readonly name?: string;
                        };
                    };
                } | {
                    readonly __typename: 'NftTransfer';
                    readonly id: string;
                    readonly nftStandard: NftStandard;
                    readonly sender: string;
                    readonly recipient: string;
                    readonly direction: TransactionDirection;
                    readonly asset: {
                        readonly __typename?: 'NftAsset';
                        readonly id: string;
                        readonly name?: string;
                        readonly tokenId: string;
                        readonly nftContract?: {
                            readonly __typename?: 'NftContract';
                            readonly id: string;
                            readonly chain: Chain;
                            readonly address: string;
                        };
                        readonly image?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                        readonly collection?: {
                            readonly __typename?: 'NftCollection';
                            readonly id: string;
                            readonly name?: string;
                        };
                    };
                } | {
                    readonly __typename: 'OnRampTransfer';
                } | {
                    readonly __typename: 'TokenApproval';
                    readonly id: string;
                    readonly tokenStandard: TokenStandard;
                    readonly approvedAddress: string;
                    readonly quantity: string;
                    readonly asset: {
                        readonly __typename?: 'Token';
                        readonly id: string;
                        readonly name?: string;
                        readonly symbol?: string;
                        readonly address?: string;
                        readonly decimals?: number;
                        readonly chain: Chain;
                        readonly standard?: TokenStandard;
                        readonly project?: {
                            readonly __typename?: 'TokenProject';
                            readonly id: string;
                            readonly isSpam?: boolean;
                            readonly logo?: {
                                readonly __typename?: 'Image';
                                readonly id: string;
                                readonly url: string;
                            };
                        };
                    };
                } | {
                    readonly __typename: 'TokenTransfer';
                    readonly id: string;
                    readonly tokenStandard: TokenStandard;
                    readonly quantity: string;
                    readonly sender: string;
                    readonly recipient: string;
                    readonly direction: TransactionDirection;
                    readonly asset: {
                        readonly __typename?: 'Token';
                        readonly id: string;
                        readonly name?: string;
                        readonly symbol?: string;
                        readonly address?: string;
                        readonly decimals?: number;
                        readonly chain: Chain;
                        readonly standard?: TokenStandard;
                        readonly project?: {
                            readonly __typename?: 'TokenProject';
                            readonly id: string;
                            readonly isSpam?: boolean;
                            readonly logo?: {
                                readonly __typename?: 'Image';
                                readonly id: string;
                                readonly url: string;
                            };
                        };
                    };
                    readonly transactedValue?: {
                        readonly __typename?: 'Amount';
                        readonly id: string;
                        readonly currency?: Currency;
                        readonly value: number;
                    };
                }>;
            };
        }>;
    }>;
};
export type AssetQueryVariables = Exact<{
    address: Scalars['String'];
    orderBy?: InputMaybe<NftAssetSortableField>;
    asc?: InputMaybe<Scalars['Boolean']>;
    filter?: InputMaybe<NftAssetsFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    before?: InputMaybe<Scalars['String']>;
}>;
export type AssetQuery = {
    readonly __typename?: 'Query';
    readonly nftAssets?: {
        readonly __typename?: 'NftAssetConnection';
        readonly totalCount?: number;
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftAssetEdge';
            readonly cursor: string;
            readonly node: {
                readonly __typename?: 'NftAsset';
                readonly id: string;
                readonly name?: string;
                readonly tokenId: string;
                readonly animationUrl?: string;
                readonly suspiciousFlag?: boolean;
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly smallImage?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly collection?: {
                    readonly __typename?: 'NftCollection';
                    readonly name?: string;
                    readonly isVerified?: boolean;
                    readonly nftContracts?: ReadonlyArray<{
                        readonly __typename?: 'NftContract';
                        readonly address: string;
                        readonly standard?: NftStandard;
                    }>;
                };
                readonly listings?: {
                    readonly __typename?: 'NftOrderConnection';
                    readonly edges: ReadonlyArray<{
                        readonly __typename?: 'NftOrderEdge';
                        readonly cursor: string;
                        readonly node: {
                            readonly __typename?: 'NftOrder';
                            readonly address: string;
                            readonly createdAt: number;
                            readonly endAt?: number;
                            readonly id: string;
                            readonly maker: string;
                            readonly marketplace: NftMarketplace;
                            readonly marketplaceUrl: string;
                            readonly orderHash?: string;
                            readonly quantity: number;
                            readonly startAt: number;
                            readonly status: OrderStatus;
                            readonly taker?: string;
                            readonly tokenId?: string;
                            readonly type: OrderType;
                            readonly protocolParameters?: any;
                            readonly price: {
                                readonly __typename?: 'Amount';
                                readonly currency?: Currency;
                                readonly value: number;
                            };
                        };
                    }>;
                };
                readonly rarities?: ReadonlyArray<{
                    readonly __typename?: 'NftAssetRarity';
                    readonly rank?: number;
                }>;
            };
        }>;
        readonly pageInfo: {
            readonly __typename?: 'PageInfo';
            readonly endCursor?: string;
            readonly hasNextPage?: boolean;
            readonly hasPreviousPage?: boolean;
            readonly startCursor?: string;
        };
    };
};
export type CollectionQueryVariables = Exact<{
    addresses: ReadonlyArray<Scalars['String']> | Scalars['String'];
}>;
export type CollectionQuery = {
    readonly __typename?: 'Query';
    readonly nftCollections?: {
        readonly __typename?: 'NftCollectionConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftCollectionEdge';
            readonly cursor: string;
            readonly node: {
                readonly __typename?: 'NftCollection';
                readonly collectionId: string;
                readonly description?: string;
                readonly discordUrl?: string;
                readonly homepageUrl?: string;
                readonly instagramName?: string;
                readonly isVerified?: boolean;
                readonly name?: string;
                readonly numAssets?: number;
                readonly twitterName?: string;
                readonly bannerImage?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly nftContracts?: ReadonlyArray<{
                    readonly __typename?: 'NftContract';
                    readonly address: string;
                    readonly chain: Chain;
                    readonly name?: string;
                    readonly standard?: NftStandard;
                    readonly symbol?: string;
                    readonly totalSupply?: number;
                }>;
                readonly traits?: ReadonlyArray<{
                    readonly __typename?: 'NftCollectionTrait';
                    readonly name?: string;
                    readonly values?: ReadonlyArray<string>;
                    readonly stats?: ReadonlyArray<{
                        readonly __typename?: 'NftCollectionTraitStats';
                        readonly name?: string;
                        readonly value?: string;
                        readonly assets?: number;
                        readonly listings?: number;
                    }>;
                }>;
                readonly markets?: ReadonlyArray<{
                    readonly __typename?: 'NftCollectionMarket';
                    readonly owners?: number;
                    readonly floorPrice?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly currency?: Currency;
                        readonly value: number;
                    };
                    readonly totalVolume?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                        readonly currency?: Currency;
                    };
                    readonly listings?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly volume?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                        readonly currency?: Currency;
                    };
                    readonly volumePercentChange?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                        readonly currency?: Currency;
                    };
                    readonly floorPricePercentChange?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                        readonly currency?: Currency;
                    };
                    readonly marketplaces?: ReadonlyArray<{
                        readonly __typename?: 'NftCollectionMarketplace';
                        readonly marketplace?: NftMarketplace;
                        readonly listings?: number;
                        readonly floorPrice?: number;
                    }>;
                }>;
            };
        }>;
        readonly pageInfo: {
            readonly __typename?: 'PageInfo';
            readonly endCursor?: string;
            readonly hasNextPage?: boolean;
            readonly hasPreviousPage?: boolean;
            readonly startCursor?: string;
        };
    };
};
export type CollectionSearchQueryVariables = Exact<{
    query: Scalars['String'];
}>;
export type CollectionSearchQuery = {
    readonly __typename?: 'Query';
    readonly nftCollections?: {
        readonly __typename?: 'NftCollectionConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftCollectionEdge';
            readonly cursor: string;
            readonly node: {
                readonly __typename?: 'NftCollection';
                readonly isVerified?: boolean;
                readonly name?: string;
                readonly numAssets?: number;
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly nftContracts?: ReadonlyArray<{
                    readonly __typename?: 'NftContract';
                    readonly address: string;
                    readonly chain: Chain;
                    readonly name?: string;
                    readonly symbol?: string;
                    readonly totalSupply?: number;
                }>;
                readonly markets?: ReadonlyArray<{
                    readonly __typename?: 'NftCollectionMarket';
                    readonly floorPrice?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly currency?: Currency;
                        readonly value: number;
                    };
                }>;
            };
        }>;
        readonly pageInfo: {
            readonly __typename?: 'PageInfo';
            readonly endCursor?: string;
            readonly hasNextPage?: boolean;
            readonly hasPreviousPage?: boolean;
            readonly startCursor?: string;
        };
    };
};
export type DetailsQueryVariables = Exact<{
    address: Scalars['String'];
    tokenId: Scalars['String'];
}>;
export type DetailsQuery = {
    readonly __typename?: 'Query';
    readonly nftAssets?: {
        readonly __typename?: 'NftAssetConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftAssetEdge';
            readonly node: {
                readonly __typename?: 'NftAsset';
                readonly id: string;
                readonly name?: string;
                readonly ownerAddress?: string;
                readonly tokenId: string;
                readonly description?: string;
                readonly animationUrl?: string;
                readonly suspiciousFlag?: boolean;
                readonly metadataUrl?: string;
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly smallImage?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly originalImage?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly creator?: {
                    readonly __typename?: 'NftProfile';
                    readonly address: string;
                    readonly isVerified?: boolean;
                    readonly profileImage?: {
                        readonly __typename?: 'Image';
                        readonly url: string;
                    };
                };
                readonly collection?: {
                    readonly __typename?: 'NftCollection';
                    readonly name?: string;
                    readonly isVerified?: boolean;
                    readonly numAssets?: number;
                    readonly twitterName?: string;
                    readonly discordUrl?: string;
                    readonly homepageUrl?: string;
                    readonly description?: string;
                    readonly image?: {
                        readonly __typename?: 'Image';
                        readonly url: string;
                    };
                    readonly nftContracts?: ReadonlyArray<{
                        readonly __typename?: 'NftContract';
                        readonly address: string;
                        readonly standard?: NftStandard;
                    }>;
                };
                readonly listings?: {
                    readonly __typename?: 'NftOrderConnection';
                    readonly edges: ReadonlyArray<{
                        readonly __typename?: 'NftOrderEdge';
                        readonly cursor: string;
                        readonly node: {
                            readonly __typename?: 'NftOrder';
                            readonly address: string;
                            readonly createdAt: number;
                            readonly endAt?: number;
                            readonly id: string;
                            readonly maker: string;
                            readonly marketplace: NftMarketplace;
                            readonly marketplaceUrl: string;
                            readonly orderHash?: string;
                            readonly quantity: number;
                            readonly startAt: number;
                            readonly status: OrderStatus;
                            readonly taker?: string;
                            readonly tokenId?: string;
                            readonly type: OrderType;
                            readonly protocolParameters?: any;
                            readonly price: {
                                readonly __typename?: 'Amount';
                                readonly currency?: Currency;
                                readonly value: number;
                            };
                        };
                    }>;
                };
                readonly rarities?: ReadonlyArray<{
                    readonly __typename?: 'NftAssetRarity';
                    readonly provider?: NftRarityProvider;
                    readonly rank?: number;
                    readonly score?: number;
                }>;
                readonly traits?: ReadonlyArray<{
                    readonly __typename?: 'NftAssetTrait';
                    readonly name?: string;
                    readonly value?: string;
                }>;
            };
        }>;
    };
};
export type NftActivityQueryVariables = Exact<{
    filter?: InputMaybe<NftActivityFilterInput>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
}>;
export type NftActivityQuery = {
    readonly __typename?: 'Query';
    readonly nftActivity?: {
        readonly __typename?: 'NftActivityConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftActivityEdge';
            readonly node: {
                readonly __typename?: 'NftActivity';
                readonly id: string;
                readonly address: string;
                readonly tokenId?: string;
                readonly type: NftActivityType;
                readonly marketplace?: string;
                readonly fromAddress: string;
                readonly toAddress?: string;
                readonly transactionHash?: string;
                readonly orderStatus?: OrderStatus;
                readonly quantity?: number;
                readonly url?: string;
                readonly timestamp: number;
                readonly asset?: {
                    readonly __typename?: 'NftAsset';
                    readonly id: string;
                    readonly metadataUrl?: string;
                    readonly name?: string;
                    readonly suspiciousFlag?: boolean;
                    readonly image?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                    readonly smallImage?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                    readonly rarities?: ReadonlyArray<{
                        readonly __typename?: 'NftAssetRarity';
                        readonly id: string;
                        readonly provider?: NftRarityProvider;
                        readonly rank?: number;
                        readonly score?: number;
                    }>;
                    readonly nftContract?: {
                        readonly __typename?: 'NftContract';
                        readonly id: string;
                        readonly standard?: NftStandard;
                    };
                    readonly collection?: {
                        readonly __typename?: 'NftCollection';
                        readonly id: string;
                        readonly image?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                    };
                };
                readonly price?: {
                    readonly __typename?: 'Amount';
                    readonly id: string;
                    readonly value: number;
                };
            };
        }>;
        readonly pageInfo: {
            readonly __typename?: 'PageInfo';
            readonly endCursor?: string;
            readonly hasNextPage?: boolean;
            readonly hasPreviousPage?: boolean;
            readonly startCursor?: string;
        };
    };
};
export type NftBalanceQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
    filter?: InputMaybe<NftBalancesFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    before?: InputMaybe<Scalars['String']>;
}>;
export type NftBalanceQuery = {
    readonly __typename?: 'Query';
    readonly nftBalances?: {
        readonly __typename?: 'NftBalanceConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftBalanceEdge';
            readonly node: {
                readonly __typename?: 'NftBalance';
                readonly listedMarketplaces?: ReadonlyArray<NftMarketplace>;
                readonly ownedAsset?: {
                    readonly __typename?: 'NftAsset';
                    readonly id: string;
                    readonly animationUrl?: string;
                    readonly description?: string;
                    readonly flaggedBy?: string;
                    readonly name?: string;
                    readonly ownerAddress?: string;
                    readonly suspiciousFlag?: boolean;
                    readonly tokenId: string;
                    readonly collection?: {
                        readonly __typename?: 'NftCollection';
                        readonly id: string;
                        readonly isVerified?: boolean;
                        readonly name?: string;
                        readonly twitterName?: string;
                        readonly image?: {
                            readonly __typename?: 'Image';
                            readonly id: string;
                            readonly url: string;
                        };
                        readonly nftContracts?: ReadonlyArray<{
                            readonly __typename?: 'NftContract';
                            readonly id: string;
                            readonly address: string;
                            readonly chain: Chain;
                            readonly name?: string;
                            readonly standard?: NftStandard;
                            readonly symbol?: string;
                            readonly totalSupply?: number;
                        }>;
                        readonly markets?: ReadonlyArray<{
                            readonly __typename?: 'NftCollectionMarket';
                            readonly id: string;
                            readonly floorPrice?: {
                                readonly __typename?: 'TimestampedAmount';
                                readonly id: string;
                                readonly value: number;
                            };
                        }>;
                    };
                    readonly image?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                    readonly originalImage?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                    readonly smallImage?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                    readonly thumbnail?: {
                        readonly __typename?: 'Image';
                        readonly id: string;
                        readonly url: string;
                    };
                    readonly listings?: {
                        readonly __typename?: 'NftOrderConnection';
                        readonly edges: ReadonlyArray<{
                            readonly __typename?: 'NftOrderEdge';
                            readonly node: {
                                readonly __typename?: 'NftOrder';
                                readonly createdAt: number;
                                readonly marketplace: NftMarketplace;
                                readonly endAt?: number;
                                readonly price: {
                                    readonly __typename?: 'Amount';
                                    readonly id: string;
                                    readonly value: number;
                                    readonly currency?: Currency;
                                };
                            };
                        }>;
                    };
                };
                readonly listingFees?: ReadonlyArray<{
                    readonly __typename?: 'NftFee';
                    readonly id: string;
                    readonly payoutAddress: string;
                    readonly basisPoints: number;
                }>;
                readonly lastPrice?: {
                    readonly __typename?: 'TimestampedAmount';
                    readonly id: string;
                    readonly currency?: Currency;
                    readonly timestamp: number;
                    readonly value: number;
                };
            };
        }>;
        readonly pageInfo: {
            readonly __typename?: 'PageInfo';
            readonly endCursor?: string;
            readonly hasNextPage?: boolean;
            readonly hasPreviousPage?: boolean;
            readonly startCursor?: string;
        };
    };
};
export type NftUniversalRouterAddressQueryVariables = Exact<{
    chain?: InputMaybe<Chain>;
}>;
export type NftUniversalRouterAddressQuery = {
    readonly __typename?: 'Query';
    readonly nftRoute?: {
        readonly __typename?: 'NftRouteResponse';
        readonly toAddress: string;
    };
};
export type NftRouteQueryVariables = Exact<{
    chain?: InputMaybe<Chain>;
    senderAddress: Scalars['String'];
    nftTrades: ReadonlyArray<NftTradeInput> | NftTradeInput;
    tokenTrades?: InputMaybe<ReadonlyArray<TokenTradeInput> | TokenTradeInput>;
}>;
export type NftRouteQuery = {
    readonly __typename?: 'Query';
    readonly nftRoute?: {
        readonly __typename?: 'NftRouteResponse';
        readonly id: string;
        readonly calldata: string;
        readonly toAddress: string;
        readonly route?: ReadonlyArray<{
            readonly __typename?: 'NftTrade';
            readonly amount: number;
            readonly contractAddress: string;
            readonly id: string;
            readonly marketplace: NftMarketplace;
            readonly tokenId: string;
            readonly tokenType?: NftStandard;
            readonly price: {
                readonly __typename?: 'TokenAmount';
                readonly id: string;
                readonly currency: Currency;
                readonly value: string;
            };
            readonly quotePrice?: {
                readonly __typename?: 'TokenAmount';
                readonly id: string;
                readonly currency: Currency;
                readonly value: string;
            };
        }>;
        readonly sendAmount: {
            readonly __typename?: 'TokenAmount';
            readonly id: string;
            readonly currency: Currency;
            readonly value: string;
        };
    };
};
export type TrendingCollectionsQueryVariables = Exact<{
    size?: InputMaybe<Scalars['Int']>;
    timePeriod?: InputMaybe<HistoryDuration>;
}>;
export type TrendingCollectionsQuery = {
    readonly __typename?: 'Query';
    readonly topCollections?: {
        readonly __typename?: 'NftCollectionConnection';
        readonly edges: ReadonlyArray<{
            readonly __typename?: 'NftCollectionEdge';
            readonly node: {
                readonly __typename?: 'NftCollection';
                readonly name?: string;
                readonly isVerified?: boolean;
                readonly nftContracts?: ReadonlyArray<{
                    readonly __typename?: 'NftContract';
                    readonly address: string;
                    readonly totalSupply?: number;
                }>;
                readonly image?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly bannerImage?: {
                    readonly __typename?: 'Image';
                    readonly url: string;
                };
                readonly markets?: ReadonlyArray<{
                    readonly __typename?: 'NftCollectionMarket';
                    readonly owners?: number;
                    readonly floorPrice?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly totalVolume?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly volume?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly volumePercentChange?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly floorPricePercentChange?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly sales?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                    readonly listings?: {
                        readonly __typename?: 'TimestampedAmount';
                        readonly value: number;
                    };
                }>;
            };
        }>;
    };
};
export type PortfolioBalancesQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
    chains: ReadonlyArray<Chain> | Chain;
}>;
export type PortfolioBalancesQuery = {
    readonly __typename?: 'Query';
    readonly portfolios?: ReadonlyArray<{
        readonly __typename?: 'Portfolio';
        readonly id: string;
        readonly tokensTotalDenominatedValue?: {
            readonly __typename?: 'Amount';
            readonly id: string;
            readonly value: number;
        };
        readonly tokensTotalDenominatedValueChange?: {
            readonly __typename?: 'AmountChange';
            readonly absolute?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
            readonly percentage?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly value: number;
            };
        };
        readonly tokenBalances?: ReadonlyArray<{
            readonly __typename?: 'TokenBalance';
            readonly id: string;
            readonly quantity?: number;
            readonly denominatedValue?: {
                readonly __typename?: 'Amount';
                readonly id: string;
                readonly currency?: Currency;
                readonly value: number;
            };
            readonly tokenProjectMarket?: {
                readonly __typename?: 'TokenProjectMarket';
                readonly id: string;
                readonly pricePercentChange?: {
                    readonly __typename?: 'Amount';
                    readonly id: string;
                    readonly value: number;
                };
                readonly tokenProject: {
                    readonly __typename?: 'TokenProject';
                    readonly id: string;
                    readonly logoUrl?: string;
                    readonly isSpam?: boolean;
                };
            };
            readonly token?: {
                readonly __typename?: 'Token';
                readonly id: string;
                readonly chain: Chain;
                readonly address?: string;
                readonly name?: string;
                readonly symbol?: string;
                readonly standard?: TokenStandard;
                readonly decimals?: number;
            };
        }>;
    }>;
};
export declare const TransactionPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenAssetPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenTransferPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftAssetPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftTransferPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenApprovalPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftApprovalPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftApproveForAllPartsFragmentDoc: Apollo.DocumentNode;
export declare const TransactionDetailsPartsFragmentDoc: Apollo.DocumentNode;
export declare const SwapOrderDetailsPartsFragmentDoc: Apollo.DocumentNode;
export declare const AssetActivityPartsFragmentDoc: Apollo.DocumentNode;
export declare const ConvertDocument: Apollo.DocumentNode;
/**
 * __useConvertQuery__
 *
 * To run a query within a React component, call `useConvertQuery` and pass it any options that fit your needs.
 * When your component renders, `useConvertQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConvertQuery({
 *   variables: {
 *      toCurrency: // value for 'toCurrency'
 *   },
 * });
 */
export declare function useConvertQuery(baseOptions: Apollo.QueryHookOptions<ConvertQuery, ConvertQueryVariables>): Apollo.QueryResult<ConvertQuery, Exact<{
    toCurrency: Currency;
}>>;
export declare function useConvertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConvertQuery, ConvertQueryVariables>): Apollo.LazyQueryResultTuple<ConvertQuery, Exact<{
    toCurrency: Currency;
}>>;
export type ConvertQueryHookResult = ReturnType<typeof useConvertQuery>;
export type ConvertLazyQueryHookResult = ReturnType<typeof useConvertLazyQuery>;
export type ConvertQueryResult = Apollo.QueryResult<ConvertQuery, ConvertQueryVariables>;
export declare const RecentlySearchedAssetsDocument: Apollo.DocumentNode;
/**
 * __useRecentlySearchedAssetsQuery__
 *
 * To run a query within a React component, call `useRecentlySearchedAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentlySearchedAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentlySearchedAssetsQuery({
 *   variables: {
 *      collectionAddresses: // value for 'collectionAddresses'
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export declare function useRecentlySearchedAssetsQuery(baseOptions: Apollo.QueryHookOptions<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>): Apollo.QueryResult<RecentlySearchedAssetsQuery, Exact<{
    collectionAddresses: string | readonly string[];
    contracts: ContractInput | readonly ContractInput[];
}>>;
export declare function useRecentlySearchedAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>): Apollo.LazyQueryResultTuple<RecentlySearchedAssetsQuery, Exact<{
    collectionAddresses: string | readonly string[];
    contracts: ContractInput | readonly ContractInput[];
}>>;
export type RecentlySearchedAssetsQueryHookResult = ReturnType<typeof useRecentlySearchedAssetsQuery>;
export type RecentlySearchedAssetsLazyQueryHookResult = ReturnType<typeof useRecentlySearchedAssetsLazyQuery>;
export type RecentlySearchedAssetsQueryResult = Apollo.QueryResult<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>;
export declare const SearchTokensDocument: Apollo.DocumentNode;
/**
 * __useSearchTokensQuery__
 *
 * To run a query within a React component, call `useSearchTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTokensQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *   },
 * });
 */
export declare function useSearchTokensQuery(baseOptions: Apollo.QueryHookOptions<SearchTokensQuery, SearchTokensQueryVariables>): Apollo.QueryResult<SearchTokensQuery, Exact<{
    searchQuery: string;
}>>;
export declare function useSearchTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTokensQuery, SearchTokensQueryVariables>): Apollo.LazyQueryResultTuple<SearchTokensQuery, Exact<{
    searchQuery: string;
}>>;
export type SearchTokensQueryHookResult = ReturnType<typeof useSearchTokensQuery>;
export type SearchTokensLazyQueryHookResult = ReturnType<typeof useSearchTokensLazyQuery>;
export type SearchTokensQueryResult = Apollo.QueryResult<SearchTokensQuery, SearchTokensQueryVariables>;
export declare const TokenDocument: Apollo.DocumentNode;
/**
 * __useTokenQuery__
 *
 * To run a query within a React component, call `useTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export declare function useTokenQuery(baseOptions: Apollo.QueryHookOptions<TokenQuery, TokenQueryVariables>): Apollo.QueryResult<TokenQuery, Exact<{
    chain: Chain;
    address?: string | undefined;
}>>;
export declare function useTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenQuery, TokenQueryVariables>): Apollo.LazyQueryResultTuple<TokenQuery, Exact<{
    chain: Chain;
    address?: string | undefined;
}>>;
export type TokenQueryHookResult = ReturnType<typeof useTokenQuery>;
export type TokenLazyQueryHookResult = ReturnType<typeof useTokenLazyQuery>;
export type TokenQueryResult = Apollo.QueryResult<TokenQuery, TokenQueryVariables>;
export declare const TokenPriceDocument: Apollo.DocumentNode;
/**
 * __useTokenPriceQuery__
 *
 * To run a query within a React component, call `useTokenPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export declare function useTokenPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>): Apollo.QueryResult<TokenPriceQuery, Exact<{
    chain: Chain;
    address?: string | undefined;
    duration: HistoryDuration;
}>>;
export declare function useTokenPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>): Apollo.LazyQueryResultTuple<TokenPriceQuery, Exact<{
    chain: Chain;
    address?: string | undefined;
    duration: HistoryDuration;
}>>;
export type TokenPriceQueryHookResult = ReturnType<typeof useTokenPriceQuery>;
export type TokenPriceLazyQueryHookResult = ReturnType<typeof useTokenPriceLazyQuery>;
export type TokenPriceQueryResult = Apollo.QueryResult<TokenPriceQuery, TokenPriceQueryVariables>;
export declare const UniswapPricesDocument: Apollo.DocumentNode;
/**
 * __useUniswapPricesQuery__
 *
 * To run a query within a React component, call `useUniswapPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniswapPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniswapPricesQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export declare function useUniswapPricesQuery(baseOptions: Apollo.QueryHookOptions<UniswapPricesQuery, UniswapPricesQueryVariables>): Apollo.QueryResult<UniswapPricesQuery, Exact<{
    contracts: ContractInput | readonly ContractInput[];
}>>;
export declare function useUniswapPricesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniswapPricesQuery, UniswapPricesQueryVariables>): Apollo.LazyQueryResultTuple<UniswapPricesQuery, Exact<{
    contracts: ContractInput | readonly ContractInput[];
}>>;
export type UniswapPricesQueryHookResult = ReturnType<typeof useUniswapPricesQuery>;
export type UniswapPricesLazyQueryHookResult = ReturnType<typeof useUniswapPricesLazyQuery>;
export type UniswapPricesQueryResult = Apollo.QueryResult<UniswapPricesQuery, UniswapPricesQueryVariables>;
export declare const TokenSpotPriceDocument: Apollo.DocumentNode;
/**
 * __useTokenSpotPriceQuery__
 *
 * To run a query within a React component, call `useTokenSpotPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenSpotPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenSpotPriceQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export declare function useTokenSpotPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>): Apollo.QueryResult<TokenSpotPriceQuery, Exact<{
    chain: Chain;
    address?: string | undefined;
}>>;
export declare function useTokenSpotPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>): Apollo.LazyQueryResultTuple<TokenSpotPriceQuery, Exact<{
    chain: Chain;
    address?: string | undefined;
}>>;
export type TokenSpotPriceQueryHookResult = ReturnType<typeof useTokenSpotPriceQuery>;
export type TokenSpotPriceLazyQueryHookResult = ReturnType<typeof useTokenSpotPriceLazyQuery>;
export type TokenSpotPriceQueryResult = Apollo.QueryResult<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>;
export declare const TopTokens100Document: Apollo.DocumentNode;
/**
 * __useTopTokens100Query__
 *
 * To run a query within a React component, call `useTopTokens100Query` and pass it any options that fit your needs.
 * When your component renders, `useTopTokens100Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopTokens100Query({
 *   variables: {
 *      duration: // value for 'duration'
 *      chain: // value for 'chain'
 *   },
 * });
 */
export declare function useTopTokens100Query(baseOptions: Apollo.QueryHookOptions<TopTokens100Query, TopTokens100QueryVariables>): Apollo.QueryResult<TopTokens100Query, Exact<{
    duration: HistoryDuration;
    chain: Chain;
}>>;
export declare function useTopTokens100LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopTokens100Query, TopTokens100QueryVariables>): Apollo.LazyQueryResultTuple<TopTokens100Query, Exact<{
    duration: HistoryDuration;
    chain: Chain;
}>>;
export type TopTokens100QueryHookResult = ReturnType<typeof useTopTokens100Query>;
export type TopTokens100LazyQueryHookResult = ReturnType<typeof useTopTokens100LazyQuery>;
export type TopTokens100QueryResult = Apollo.QueryResult<TopTokens100Query, TopTokens100QueryVariables>;
export declare const TopTokensSparklineDocument: Apollo.DocumentNode;
/**
 * __useTopTokensSparklineQuery__
 *
 * To run a query within a React component, call `useTopTokensSparklineQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopTokensSparklineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopTokensSparklineQuery({
 *   variables: {
 *      duration: // value for 'duration'
 *      chain: // value for 'chain'
 *   },
 * });
 */
export declare function useTopTokensSparklineQuery(baseOptions: Apollo.QueryHookOptions<TopTokensSparklineQuery, TopTokensSparklineQueryVariables>): Apollo.QueryResult<TopTokensSparklineQuery, Exact<{
    duration: HistoryDuration;
    chain: Chain;
}>>;
export declare function useTopTokensSparklineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopTokensSparklineQuery, TopTokensSparklineQueryVariables>): Apollo.LazyQueryResultTuple<TopTokensSparklineQuery, Exact<{
    duration: HistoryDuration;
    chain: Chain;
}>>;
export type TopTokensSparklineQueryHookResult = ReturnType<typeof useTopTokensSparklineQuery>;
export type TopTokensSparklineLazyQueryHookResult = ReturnType<typeof useTopTokensSparklineLazyQuery>;
export type TopTokensSparklineQueryResult = Apollo.QueryResult<TopTokensSparklineQuery, TopTokensSparklineQueryVariables>;
export declare const TrendingTokensDocument: Apollo.DocumentNode;
/**
 * __useTrendingTokensQuery__
 *
 * To run a query within a React component, call `useTrendingTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingTokensQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *   },
 * });
 */
export declare function useTrendingTokensQuery(baseOptions: Apollo.QueryHookOptions<TrendingTokensQuery, TrendingTokensQueryVariables>): Apollo.QueryResult<TrendingTokensQuery, Exact<{
    chain: Chain;
}>>;
export declare function useTrendingTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingTokensQuery, TrendingTokensQueryVariables>): Apollo.LazyQueryResultTuple<TrendingTokensQuery, Exact<{
    chain: Chain;
}>>;
export type TrendingTokensQueryHookResult = ReturnType<typeof useTrendingTokensQuery>;
export type TrendingTokensLazyQueryHookResult = ReturnType<typeof useTrendingTokensLazyQuery>;
export type TrendingTokensQueryResult = Apollo.QueryResult<TrendingTokensQuery, TrendingTokensQueryVariables>;
export declare const ActivityDocument: Apollo.DocumentNode;
/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export declare function useActivityQuery(baseOptions: Apollo.QueryHookOptions<ActivityQuery, ActivityQueryVariables>): Apollo.QueryResult<ActivityQuery, Exact<{
    account: string;
}>>;
export declare function useActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>): Apollo.LazyQueryResultTuple<ActivityQuery, Exact<{
    account: string;
}>>;
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = Apollo.QueryResult<ActivityQuery, ActivityQueryVariables>;
export declare const AssetDocument: Apollo.DocumentNode;
/**
 * __useAssetQuery__
 *
 * To run a query within a React component, call `useAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetQuery({
 *   variables: {
 *      address: // value for 'address'
 *      orderBy: // value for 'orderBy'
 *      asc: // value for 'asc'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export declare function useAssetQuery(baseOptions: Apollo.QueryHookOptions<AssetQuery, AssetQueryVariables>): Apollo.QueryResult<AssetQuery, Exact<{
    address: string;
    orderBy?: NftAssetSortableField | undefined;
    asc?: boolean | undefined;
    filter?: NftAssetsFilterInput | undefined;
    first?: number | undefined;
    after?: string | undefined;
    last?: number | undefined;
    before?: string | undefined;
}>>;
export declare function useAssetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssetQuery, AssetQueryVariables>): Apollo.LazyQueryResultTuple<AssetQuery, Exact<{
    address: string;
    orderBy?: NftAssetSortableField | undefined;
    asc?: boolean | undefined;
    filter?: NftAssetsFilterInput | undefined;
    first?: number | undefined;
    after?: string | undefined;
    last?: number | undefined;
    before?: string | undefined;
}>>;
export type AssetQueryHookResult = ReturnType<typeof useAssetQuery>;
export type AssetLazyQueryHookResult = ReturnType<typeof useAssetLazyQuery>;
export type AssetQueryResult = Apollo.QueryResult<AssetQuery, AssetQueryVariables>;
export declare const CollectionDocument: Apollo.DocumentNode;
/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export declare function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>): Apollo.QueryResult<CollectionQuery, Exact<{
    addresses: string | readonly string[];
}>>;
export declare function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>): Apollo.LazyQueryResultTuple<CollectionQuery, Exact<{
    addresses: string | readonly string[];
}>>;
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;
export declare const CollectionSearchDocument: Apollo.DocumentNode;
/**
 * __useCollectionSearchQuery__
 *
 * To run a query within a React component, call `useCollectionSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export declare function useCollectionSearchQuery(baseOptions: Apollo.QueryHookOptions<CollectionSearchQuery, CollectionSearchQueryVariables>): Apollo.QueryResult<CollectionSearchQuery, Exact<{
    query: string;
}>>;
export declare function useCollectionSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionSearchQuery, CollectionSearchQueryVariables>): Apollo.LazyQueryResultTuple<CollectionSearchQuery, Exact<{
    query: string;
}>>;
export type CollectionSearchQueryHookResult = ReturnType<typeof useCollectionSearchQuery>;
export type CollectionSearchLazyQueryHookResult = ReturnType<typeof useCollectionSearchLazyQuery>;
export type CollectionSearchQueryResult = Apollo.QueryResult<CollectionSearchQuery, CollectionSearchQueryVariables>;
export declare const DetailsDocument: Apollo.DocumentNode;
/**
 * __useDetailsQuery__
 *
 * To run a query within a React component, call `useDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      tokenId: // value for 'tokenId'
 *   },
 * });
 */
export declare function useDetailsQuery(baseOptions: Apollo.QueryHookOptions<DetailsQuery, DetailsQueryVariables>): Apollo.QueryResult<DetailsQuery, Exact<{
    address: string;
    tokenId: string;
}>>;
export declare function useDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailsQuery, DetailsQueryVariables>): Apollo.LazyQueryResultTuple<DetailsQuery, Exact<{
    address: string;
    tokenId: string;
}>>;
export type DetailsQueryHookResult = ReturnType<typeof useDetailsQuery>;
export type DetailsLazyQueryHookResult = ReturnType<typeof useDetailsLazyQuery>;
export type DetailsQueryResult = Apollo.QueryResult<DetailsQuery, DetailsQueryVariables>;
export declare const NftActivityDocument: Apollo.DocumentNode;
/**
 * __useNftActivityQuery__
 *
 * To run a query within a React component, call `useNftActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftActivityQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export declare function useNftActivityQuery(baseOptions?: Apollo.QueryHookOptions<NftActivityQuery, NftActivityQueryVariables>): Apollo.QueryResult<NftActivityQuery, Exact<{
    filter?: NftActivityFilterInput | undefined;
    after?: string | undefined;
    first?: number | undefined;
}>>;
export declare function useNftActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftActivityQuery, NftActivityQueryVariables>): Apollo.LazyQueryResultTuple<NftActivityQuery, Exact<{
    filter?: NftActivityFilterInput | undefined;
    after?: string | undefined;
    first?: number | undefined;
}>>;
export type NftActivityQueryHookResult = ReturnType<typeof useNftActivityQuery>;
export type NftActivityLazyQueryHookResult = ReturnType<typeof useNftActivityLazyQuery>;
export type NftActivityQueryResult = Apollo.QueryResult<NftActivityQuery, NftActivityQueryVariables>;
export declare const NftBalanceDocument: Apollo.DocumentNode;
/**
 * __useNftBalanceQuery__
 *
 * To run a query within a React component, call `useNftBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftBalanceQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export declare function useNftBalanceQuery(baseOptions: Apollo.QueryHookOptions<NftBalanceQuery, NftBalanceQueryVariables>): Apollo.QueryResult<NftBalanceQuery, Exact<{
    ownerAddress: string;
    filter?: NftBalancesFilterInput | undefined;
    first?: number | undefined;
    after?: string | undefined;
    last?: number | undefined;
    before?: string | undefined;
}>>;
export declare function useNftBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftBalanceQuery, NftBalanceQueryVariables>): Apollo.LazyQueryResultTuple<NftBalanceQuery, Exact<{
    ownerAddress: string;
    filter?: NftBalancesFilterInput | undefined;
    first?: number | undefined;
    after?: string | undefined;
    last?: number | undefined;
    before?: string | undefined;
}>>;
export type NftBalanceQueryHookResult = ReturnType<typeof useNftBalanceQuery>;
export type NftBalanceLazyQueryHookResult = ReturnType<typeof useNftBalanceLazyQuery>;
export type NftBalanceQueryResult = Apollo.QueryResult<NftBalanceQuery, NftBalanceQueryVariables>;
export declare const NftUniversalRouterAddressDocument: Apollo.DocumentNode;
/**
 * __useNftUniversalRouterAddressQuery__
 *
 * To run a query within a React component, call `useNftUniversalRouterAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftUniversalRouterAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftUniversalRouterAddressQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *   },
 * });
 */
export declare function useNftUniversalRouterAddressQuery(baseOptions?: Apollo.QueryHookOptions<NftUniversalRouterAddressQuery, NftUniversalRouterAddressQueryVariables>): Apollo.QueryResult<NftUniversalRouterAddressQuery, Exact<{
    chain?: Chain | undefined;
}>>;
export declare function useNftUniversalRouterAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftUniversalRouterAddressQuery, NftUniversalRouterAddressQueryVariables>): Apollo.LazyQueryResultTuple<NftUniversalRouterAddressQuery, Exact<{
    chain?: Chain | undefined;
}>>;
export type NftUniversalRouterAddressQueryHookResult = ReturnType<typeof useNftUniversalRouterAddressQuery>;
export type NftUniversalRouterAddressLazyQueryHookResult = ReturnType<typeof useNftUniversalRouterAddressLazyQuery>;
export type NftUniversalRouterAddressQueryResult = Apollo.QueryResult<NftUniversalRouterAddressQuery, NftUniversalRouterAddressQueryVariables>;
export declare const NftRouteDocument: Apollo.DocumentNode;
/**
 * __useNftRouteQuery__
 *
 * To run a query within a React component, call `useNftRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftRouteQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      senderAddress: // value for 'senderAddress'
 *      nftTrades: // value for 'nftTrades'
 *      tokenTrades: // value for 'tokenTrades'
 *   },
 * });
 */
export declare function useNftRouteQuery(baseOptions: Apollo.QueryHookOptions<NftRouteQuery, NftRouteQueryVariables>): Apollo.QueryResult<NftRouteQuery, Exact<{
    chain?: Chain | undefined;
    senderAddress: string;
    nftTrades: NftTradeInput | readonly NftTradeInput[];
    tokenTrades?: TokenTradeInput | readonly TokenTradeInput[] | undefined;
}>>;
export declare function useNftRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftRouteQuery, NftRouteQueryVariables>): Apollo.LazyQueryResultTuple<NftRouteQuery, Exact<{
    chain?: Chain | undefined;
    senderAddress: string;
    nftTrades: NftTradeInput | readonly NftTradeInput[];
    tokenTrades?: TokenTradeInput | readonly TokenTradeInput[] | undefined;
}>>;
export type NftRouteQueryHookResult = ReturnType<typeof useNftRouteQuery>;
export type NftRouteLazyQueryHookResult = ReturnType<typeof useNftRouteLazyQuery>;
export type NftRouteQueryResult = Apollo.QueryResult<NftRouteQuery, NftRouteQueryVariables>;
export declare const TrendingCollectionsDocument: Apollo.DocumentNode;
/**
 * __useTrendingCollectionsQuery__
 *
 * To run a query within a React component, call `useTrendingCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingCollectionsQuery({
 *   variables: {
 *      size: // value for 'size'
 *      timePeriod: // value for 'timePeriod'
 *   },
 * });
 */
export declare function useTrendingCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<TrendingCollectionsQuery, TrendingCollectionsQueryVariables>): Apollo.QueryResult<TrendingCollectionsQuery, Exact<{
    size?: number | undefined;
    timePeriod?: HistoryDuration | undefined;
}>>;
export declare function useTrendingCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingCollectionsQuery, TrendingCollectionsQueryVariables>): Apollo.LazyQueryResultTuple<TrendingCollectionsQuery, Exact<{
    size?: number | undefined;
    timePeriod?: HistoryDuration | undefined;
}>>;
export type TrendingCollectionsQueryHookResult = ReturnType<typeof useTrendingCollectionsQuery>;
export type TrendingCollectionsLazyQueryHookResult = ReturnType<typeof useTrendingCollectionsLazyQuery>;
export type TrendingCollectionsQueryResult = Apollo.QueryResult<TrendingCollectionsQuery, TrendingCollectionsQueryVariables>;
export declare const PortfolioBalancesDocument: Apollo.DocumentNode;
/**
 * __usePortfolioBalancesQuery__
 *
 * To run a query within a React component, call `usePortfolioBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioBalancesQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export declare function usePortfolioBalancesQuery(baseOptions: Apollo.QueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>): Apollo.QueryResult<PortfolioBalancesQuery, Exact<{
    ownerAddress: string;
    chains: Chain | readonly Chain[];
}>>;
export declare function usePortfolioBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>): Apollo.LazyQueryResultTuple<PortfolioBalancesQuery, Exact<{
    ownerAddress: string;
    chains: Chain | readonly Chain[];
}>>;
export type PortfolioBalancesQueryHookResult = ReturnType<typeof usePortfolioBalancesQuery>;
export type PortfolioBalancesLazyQueryHookResult = ReturnType<typeof usePortfolioBalancesLazyQuery>;
export type PortfolioBalancesQueryResult = Apollo.QueryResult<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>;
