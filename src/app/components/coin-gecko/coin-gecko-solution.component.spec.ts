import { FormsModule } from '@angular/forms';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';
import { CoinGeckoService } from 'src/app/services/coin-gecko/coin-gecko.service';
import { dogecoin } from 'src/app/services/coin-gecko/mocks/dogecoin.mock';
import { DataService } from 'src/app/services/data/data.service';

import { CoinGeckoComponent } from './coin-gecko.component';

describe('CoinGeckoComponent', () => {
  const createComponent = createComponentFactory({
    component: CoinGeckoComponent,
    imports: [FormsModule],
    providers: [
      mockProvider(CoinGeckoService, {
        getCoin: () => 'I am a CoinGeckoService#getCoin mock',
      }),
      mockProvider(DataService, {
        persistItem: () => 'I am a DataService#persistItem mock',
        reset: () => 'I am a DataService#reset mock',
      }),
    ],
  });

  function setup(props?: any): Spectator<CoinGeckoComponent> {
    return createComponent({ props: props });
  }

  describe('[coinId]', () => {
    it('should allow to update [coinId] when create component instance', () => {
      /** arrange */
      /** act */
      /** assert */
    });

    it('should allow to update [coinId] with setInput', () => {
      /** arrange */
      /** act */
      /** assert */
    });
  });

  describe('getCoinData', () => {
    it('should return details of required coin', () => {
      /** arrange */
      /** act */
      /** assert */
    });
  });
});
