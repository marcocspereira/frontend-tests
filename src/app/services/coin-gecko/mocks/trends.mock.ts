import { Coin } from '../coin.type';

export const trends: Array<Coin> = [
  {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
    genesis_date: '2013-12-08',
    market_cap_rank: 4,
    market_data: {
      current_price: {
        usd: 0.670717,
        eur: 0.551429,
      },
    },
  },
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    genesis_date: '2009-01-03',
    market_cap_rank: 1,
    market_data: {
      current_price: {
        usd: 58631,
        eur: 48203,
      },
    },
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    genesis_date: '2015-07-30',
    market_cap_rank: 2,
    market_data: {
      current_price: {
        usd: 3901.94,
        eur: 3207.98,
      },
    },
  },
  {
    id: 'litecoin',
    symbol: 'ltc',
    name: 'Litecoin',
    genesis_date: '2011-10-08',
    market_cap_rank: 10,
    market_data: {
      current_price: {
        usd: 347.0,
        eur: 285.28,
      },
    },
  },
];
