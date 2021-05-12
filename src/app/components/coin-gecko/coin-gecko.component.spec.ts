import { FormsModule } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CoinGeckoComponent } from './coin-gecko.component';

xdescribe('CoinGeckoComponent', () => {
  const createComponent = createComponentFactory({
    component: CoinGeckoComponent,
    imports: [FormsModule],
    providers: [],
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
      /**
       * TODO:
       * - Use dummy data from services/coin-gecko/mocks
       * - Consider that you're dealing with Observables. Use of() operator with your dummy response inside .returnValue()
       */
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
