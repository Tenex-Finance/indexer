import { TokenInfo, Pool } from "./CustomTypes";
// import { LatestETHPriceEntity, StateStoreEntity } from "./src/Types.gen";

export const TEN_TO_THE_3_BI = BigInt(10 ** 3);
export const TEN_TO_THE_6_BI = BigInt(10 ** 6);
export const TEN_TO_THE_18_BI = BigInt(10 ** 18);

export const SECONDS_IN_AN_HOUR = BigInt(3600);
export const SECONDS_IN_A_DAY = BigInt(86400);
export const SECONDS_IN_A_WEEK = BigInt(604800);

// export const STATE_STORE_ID = "STATE";

// Hardcoded WETH, USDC and OP token addresses with decimals
export const WETH: TokenInfo = {
  address: "0x4200000000000000000000000000000000000023",
  symbol: "WETH",
};

export const TENEX: TokenInfo = {
  address: "0xe59a3d87c883cbae7f3eb5f70e97ddf9dd759434", // Right now Tenex
  symbol: "tTenex",
};

const USDB: TokenInfo = {
  address: "0x4200000000000000000000000000000000000022",
  symbol: "USDB",
};

const tSPACE: TokenInfo = {
  address: "0xD88957c98D65E9bee30304290f734847De09B990",
  symbol: "tSPACE",
};

// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BLAST_SEPOLIA_WHITELISTED_TOKENS: TokenInfo[] = [WETH, USDB, tSPACE];

const BLAST_SEPOLIA_TESTING_POOL_ADDRESSES: string[] = [
  "0x4329dE1411d5ab7DC4C93B96a98B5b0eCCD2D0ae",
  "0x97Aa515D439c68d56D1651B7da79fd25E8CDd649"
];

// Object containing all the constants for a chain
type chainConstants = {
  eth: TokenInfo;
  usdc: TokenInfo;
  firstPriceFetchedBlockNumber: number;
  rewardToken: TokenInfo;
  rpcURL: string;
  stablecoinPools: Pool[];
  stablecoinPoolAddresses: string[];
  testingPoolAddresses: string[];
  whitelistedTokens: TokenInfo[];
  whitelistedTokenAddresses: string[];
};

const BLAST_SEPOLIA_CONSTANTS: chainConstants = {
  eth: WETH,
  usdc: USDB,
  firstPriceFetchedBlockNumber: 0,
  rewardToken: TENEX,
  rpcURL: "https://sepolia.blast.io",
  stablecoinPools: [],
  stablecoinPoolAddresses: [],
  testingPoolAddresses: BLAST_SEPOLIA_TESTING_POOL_ADDRESSES,
  whitelistedTokens: BLAST_SEPOLIA_WHITELISTED_TOKENS,
  whitelistedTokenAddresses: BLAST_SEPOLIA_WHITELISTED_TOKENS.map(
    (token) => token.address
  ),
};

// Key is chain ID
export const CHAIN_CONSTANTS: Record<number, chainConstants> = {
  168587773: BLAST_SEPOLIA_CONSTANTS,
};

export const CacheCategory = {
  Token: "token",
  GuageToPool: "guageToPool",
  BribeToPool: "bribeToPool",
  WhitelistedPoolIds: "whitelistedPoolIds",
  PoolToTokens: "poolToTokens",
} as const;

export type CacheCategory = (typeof CacheCategory)[keyof typeof CacheCategory];
