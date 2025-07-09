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
/*
tbudt 0x6a826Cb6A223a92Ad6d7a71dDF5EF946B37c2A4f
  Successfully deployed  tbta  0x190BfEd7cc26b019F90b0B92e4845A52BB023fa3
  Successfully deployed  tbsol 0x90df4Ae764e52d66bD4B3a6cf910bCD4DA9c1091
  Successfully deployed  tbop  0x59B5fA8F46E70e7B61463749B01FE5A89d5e4ebD
  Successfully deployed  tbave 0xF662DAe273910c53501060F2376c39093e087a12
  Successfully deployed  tbdog 0xfd443219921F01E2f8746D4E435386fff9947096

*/

// Hardcoded WETH, USDB and OP token addresses with decimals
export const TBTA: TokenInfo = {
  address: "0x6a826Cb6A223a92Ad6d7a71dDF5EF946B37c2A4f",
  symbol: "TBTA",
};

export const TENEX: TokenInfo = {
  address: "0xea298402F2c54B05B96f1857F7186Af7db765884", // Right now Tenex
  symbol: "TENEX",
};

const TBSOL: TokenInfo = {
  address: "0x90df4Ae764e52d66bD4B3a6cf910bCD4DA9c1091",
  symbol: "TBSOL",
};

const ETH: TokenInfo = {
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  symbol: "ETH",
};

const TBOP: TokenInfo = {
  address: "0x59B5fA8F46E70e7B61463749B01FE5A89d5e4ebD",
  symbol: "TBOP",
};

const TBAVE: TokenInfo = {
  address: "0xF662DAe273910c53501060F2376c39093e087a12",
  symbol: "TBAVE",
};
const TBDOG: TokenInfo = {
  address: "0xfd443219921F01E2f8746D4E435386fff9947096",
  symbol: "TBDOG",
};




// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BSC_WHITELISTED_TOKENS: TokenInfo[] = [TBDOG, TBAVE, ETH, TBOP, TBSOL, TENEX, TBTA];

const BSC_TESTING_POOL_ADDRESSES: string[] = [
  "0xB721107F2BCEfa5301017809d64EeB92316922fE",
    "0x34a5525920ba3936c9e3cd79262A7a54A2EE413b"
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

const BSC_CONSTANTS: chainConstants = {
  eth: ETH,
  usdb: TBTA,
  firstPriceFetchedBlockNumber: 0,
  rewardToken: TENEX,
  rpcURL: process.env.ENVIO_BLAST_RPC_URL || '',
  stablecoinPools: [],
  stablecoinPoolAddresses: [],
  testingPoolAddresses: BSC_TESTING_POOL_ADDRESSES,
  whitelistedTokens: BSC_WHITELISTED_TOKENS,
  whitelistedTokenAddresses: BSC_WHITELISTED_TOKENS.map(
    (token) => token.address
  ),
};

// Key is chain ID
export const CHAIN_CONSTANTS: Record<number, chainConstants> = {
  97: BSC_CONSTANTS,
};

export const CacheCategory = {
  Token: "token",
  GuageToPool: "guageToPool",
  BribeToPool: "bribeToPool",
  WhitelistedPoolIds: "whitelistedPoolIds",
  PoolToTokens: "poolToTokens",
} as const;

export type CacheCategory = (typeof CacheCategory)[keyof typeof CacheCategory];
