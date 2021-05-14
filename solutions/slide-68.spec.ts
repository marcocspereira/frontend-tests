import { FormsModule } from '@angular/forms';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';
import { of } from 'rxjs';
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
      const spectator = setup({ coinId: 'bitcoin' });

      /** act */
      const result = spectator.component.coinId;

      /** assert */
      expect(result).toEqual('bitcoin');
    });

    it('should allow to update [coinId] with setInput', () => {
      /** arrange */
      const spectator = setup();
      spectator.setInput({ coinId: 'bitcoin' });

      /** act */
      const result = spectator.component.coinId;

      /** assert */
      expect(result).toEqual('bitcoin');
    });
  });

  describe('getCoinData', () => {
    it('should return details of required coin', () => {
      /** arrange */
      let result: any;
      const coinId = 'dogecoin';
      const spectator = setup();
      spectator.setInput({ coinId: coinId });
      const apiSpy = spyOn(spectator.inject(CoinGeckoService), 'getCoin');
      apiSpy.withArgs(coinId).and.returnValue(of(dogecoin));
      expect(spectator.component.coin).toBeUndefined();

      /** act */
      spectator.component.getCoinData({
        coinId: coinId,
      });
      result = spectator.component.coin;

      /** assert */
      expect(apiSpy).toHaveBeenCalled();
      expect(result).toEqual(dogecoin);
    });
  });
});
