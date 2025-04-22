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

// Hardcoded WETH, USDB and OP token addresses with decimals
export const WETH: TokenInfo = {
  address: "0x4300000000000000000000000000000000000004",
  symbol: "WETH",
};

export const TENEX: TokenInfo = {
  address: "0xC4B7846887648B4bef80db245411B0323Edd2a66", // Right now Tenex
  symbol: "TENEX",
};

const USDB: TokenInfo = {
  address: "0x4300000000000000000000000000000000000003",
  symbol: "USDB",
};

const ETH: TokenInfo = {
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  symbol: "ETH",
};

const BLAST: TokenInfo = {
  address: "0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad",
  symbol: "BLAST",
};

const WBTC: TokenInfo = {
  address: "0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692",
  symbol: "WBTC",
};





// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BLAST_WHITELISTED_TOKENS: TokenInfo[] = [WETH, USDB, ETH, BLAST, WBTC, TENEX, USDB];

const BLAST_TESTING_POOL_ADDRESSES: string[] = [
  "0x794af1d173807dAb1aC6e1c46EA6927A361209Bf",
  "0x1D95F3f2Efb0a56Cd35e315bb74BD4AeEf2198A1"
];

// Object containing all the constants for a chain
type chainConstants = {
  eth: TokenInfo;
  usdb: TokenInfo;
  firstPriceFetchedBlockNumber: number;
  rewardToken: TokenInfo;
  rpcURL: string;
  stablecoinPools: Pool[];
  stablecoinPoolAddresses: string[];
  testingPoolAddresses: string[];
  whitelistedTokens: TokenInfo[];
  whitelistedTokenAddresses: string[];
};

const BLAST_CONSTANTS: chainConstants = {
  eth: WETH,
  usdb: USDB,
  firstPriceFetchedBlockNumber: 0,
  rewardToken: TENEX,
  rpcURL: process.env.ENVIO_BLAST_RPC_URL || '',
  stablecoinPools: [],
  stablecoinPoolAddresses: [],
  testingPoolAddresses: BLAST_TESTING_POOL_ADDRESSES,
  whitelistedTokens: BLAST_WHITELISTED_TOKENS,
  whitelistedTokenAddresses: BLAST_WHITELISTED_TOKENS.map(
    (token) => token.address
  ),
};

// Key is chain ID
export const CHAIN_CONSTANTS: Record<number, chainConstants> = {
  81457: BLAST_CONSTANTS,
};

export const CacheCategory = {
  Token: "token",
  GuageToPool: "guageToPool",
  BribeToPool: "bribeToPool",
  WhitelistedPoolIds: "whitelistedPoolIds",
  PoolToTokens: "poolToTokens",
} as const;

export type CacheCategory = (typeof CacheCategory)[keyof typeof CacheCategory];
