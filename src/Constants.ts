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
  address: "0x4300000000000000000000000000000000000004",
  symbol: "WETH",
};

export const TENEX: TokenInfo = {
  address: "0xD8bB56F73Fd80f68e77Aff8a0C8D20792D7AE411", // Right now Tenex
  symbol: "DFCC",
};

const USDB: TokenInfo = {
  address: "0x4300000000000000000000000000000000000003",
  symbol: "USDB",
};

const dAAVE: TokenInfo = {
  address: "0xDa4cEF2BF02328D77aAD0B7278518Aa5B88ed272",
  symbol: "dAAVE",
};
const dUSDC: TokenInfo = {
  address: "0xeBf61A86C51BA5bA353e1BA8964AfdF244420DA0",
  symbol: "dUSDC",
};
const dAMAN: TokenInfo = {
  address: "0x121aB9FFE0C106C644358530f03B6554DD2010b6",
  symbol: "dAMAN",
};
const dBHOODEV: TokenInfo = {
  address: "0x9B5330939db13d32D1f4001Bf8e76430dd0891aD",
  symbol: "dBHOODEV",
};
const dCURVE: TokenInfo = {
  address: "0x6664fF027Ef43D4f58B2B6Ce2418a8521Eb5aed4",
  symbol: "dCURVE",
};
const dOP: TokenInfo = {
  address: "0x4252003b4c397BE7d5E8A3Afc087D4966B9F0418",
  symbol: "dOP",
};

// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BLAST_SEPOLIA_WHITELISTED_TOKENS: TokenInfo[] = [WETH, USDB, dAAVE, dOP, dCURVE, dBHOODEV, dAMAN, dUSDC, dAAVE];

const BLAST_SEPOLIA_TESTING_POOL_ADDRESSES: string[] = [
  "0xECF512C41df0f44c6aF4416DB3372FcA17d8AF8a",
    "0xe55ce2c6A5a4C3eEAb3EBcB71b0E26C78A87048b"
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
  81457: BLAST_SEPOLIA_CONSTANTS,
};

export const CacheCategory = {
  Token: "token",
  GuageToPool: "guageToPool",
  BribeToPool: "bribeToPool",
  WhitelistedPoolIds: "whitelistedPoolIds",
  PoolToTokens: "poolToTokens",
} as const;

export type CacheCategory = (typeof CacheCategory)[keyof typeof CacheCategory];
