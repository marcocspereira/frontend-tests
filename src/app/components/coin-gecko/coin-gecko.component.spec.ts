import { createComponentFactory } from '@ngneat/spectator';

import { CoinGeckoComponent } from './coin-gecko.component';

xdescribe('CoinGeckoComponent', () => {
  const createComponent = createComponentFactory({
    component: CoinGeckoComponent,
    providers: [],
  });
});
