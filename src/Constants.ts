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
  address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  symbol: "WBNB",
};

export const TENEX: TokenInfo = {
  address: "0xA5d4F9862349b8F7967F3CE8D4db742449364bB1", // Right now Tenex
  symbol: "TENEX",
};

const BSCUSD: TokenInfo = {
  address: "0x55d398326f99059fF775485246999027B3197955",
  symbol: "BSC-USD",
};

const ETH: TokenInfo = {
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  symbol: "BNB",
};

const USDB: TokenInfo = {
  address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  symbol: "USDC",
};







// list of WHITELISTED tokens with their symbol and decimals to be used in pricing

const BSC_WHITELISTED_TOKENS: TokenInfo[] = [ETH, BSCUSD, WETH, TENEX, USDB];

const BSC_TESTING_POOL_ADDRESSES: string[] = [
  "0x3a497D73A272382AE445A0628A2C41c3B0889EB3",
    "0xe8dC96b7980A1243F25468a513801241CA1CdC72"
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
  usdb: USDB,
  firstPriceFetchedBlockNumber: 0,
  rewardToken: TENEX,
  rpcURL: process.env.ENVIO_BSC_RPC_URL || 'https://bnb-mainnet.g.alchemy.com/v2/cHHlg7dPcXVn5jwQ23VT0',
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
  56: BSC_CONSTANTS,
};

export const CacheCategory = {
  Token: "token",
  GuageToPool: "guageToPool",
  BribeToPool: "bribeToPool",
  WhitelistedPoolIds: "whitelistedPoolIds",
  PoolToTokens: "poolToTokens",
} as const;

export type CacheCategory = (typeof CacheCategory)[keyof typeof CacheCategory];
