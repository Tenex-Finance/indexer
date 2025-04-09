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
  address: "0xE733C5D935F617817d0d31f08bc7C569373434a3", // Right now Tenex
  symbol: "DFCC",
};

const USDB: TokenInfo = {
  address: "0x4300000000000000000000000000000000000003",
  symbol: "USDB",
};

const YIELDRA: TokenInfo = {
  address: "0xf59da24d8B1535eA4089F5d448cb8b1D92726A74",
  symbol: "YIELDRA",
};
const DEFORA: TokenInfo = {
  address: "0x1c190dF6119De5DB62c938ba79dcDf4aff579c23",
  symbol: "DEFORA",
};
const FINEXA: TokenInfo = {
  address: "0x34540Fd8E286666239ff869701981edc400daC1d",
  symbol: "FINEXA",
};
const VAULTIQ: TokenInfo = {
  address: "0xD8428A28517806E0f3072068F7De6f0602A31088",
  symbol: "VAULTIQ",
};
const SWAPRLY: TokenInfo = {
  address: "0x1D7DCd2208Df8e646e39Fa83Bd1e1d24Cd28C948",
  symbol: "SWAPRLY",
};
const DFDC: TokenInfo = {
  address: "0x116448fCAA75903e942b4CB97d3ccD8464B550DD",
  symbol: "DFDC",
};


// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BLAST_SEPOLIA_WHITELISTED_TOKENS: TokenInfo[] = [WETH, USDB, YIELDRA, DEFORA, FINEXA, VAULTIQ, SWAPRLY, DFDC];

const BLAST_SEPOLIA_TESTING_POOL_ADDRESSES: string[] = [
  "0xEe1300F6b11A564B9296b659F1d26dEA98966230",
    "0x4a111c632d237e9E8f8C9e908c4f554B1F4aC008"
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
  usdc: DFDC,
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
