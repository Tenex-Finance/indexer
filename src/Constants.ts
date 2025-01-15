import { TokenInfo, Pool } from "./CustomTypes";
import * as dotenv from 'dotenv';
// import { LatestETHPriceEntity, StateStoreEntity } from "./src/Types.gen";
dotenv.config();
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
  address: "0x2A0F4633f96176328c8116e5E887E459393e67b3", // Right now Tenex
  symbol: "tTENEX",
};

const USDB: TokenInfo = {
  address: "0x352A23D14d2D91D6D6E1274a069d325C104A8bf6",
  symbol: "tUSDT",
};

const tSPACE: TokenInfo = {
  address: "0xbfed524207d81158825991f622e8c752ab3d1bf9",
  symbol: "tDOGE",
};

// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BLAST_SEPOLIA_WHITELISTED_TOKENS: TokenInfo[] = [WETH, USDB, tSPACE];

const BLAST_SEPOLIA_TESTING_POOL_ADDRESSES: string[] = [
  "0xF92A2225A961123020eeB4811894110c347486fC",
    "0xEa0C27191479167B10b67b1c5403dF3e69697bDD"
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
  rpcURL: process.env.ENVIO_BLAST_RPC_URL || '',
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
