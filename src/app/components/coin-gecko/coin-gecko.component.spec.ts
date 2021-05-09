import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CoinGeckoComponent } from './coin-gecko.component';

xdescribe('CoinGeckoComponent', () => {
  let spectator: Spectator<CoinGeckoComponent>;
  const createComponent = createComponentFactory(CoinGeckoComponent);
});
