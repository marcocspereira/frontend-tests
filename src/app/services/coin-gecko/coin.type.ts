export type Coin = {
  id: string;
  symbol: string;
  name: string;
  genesis_date: string;
  market_cap_rank: number;
  market_data: MarketData;
};

type MarketData = {
  curent_price: {
    usd: number;
    eur: number;
  };
};
