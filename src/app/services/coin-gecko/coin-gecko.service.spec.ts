import { HttpClient } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { CoinGeckoService } from './coin-gecko.service';
import { dogecoin } from './mocks/dogecoin.mock';

xdescribe('CoinGeckoService', () => {
  let spectator: SpectatorService<CoinGeckoService>;
  const createService = createServiceFactory({
    service: CoinGeckoService,
    providers: [],
    mocks: [HttpClient],
  });

  beforeEach(() => (spectator = createService()));

  describe('getCoin', () => {
    it('should return details of required coin', () => {
      /** arrange */
      let result: any;
      const httpClient = spectator.inject(HttpClient);
      httpClient.get.and.returnValue(dogecoin);

      /** act */
      result = spectator.service.getCoin('dogecoin');

      /** assert */
      expect(result).toEqual(dogecoin);
    });
  });

  describe('getTrends', () => {
    it('should return a list of trending coins', () => {
      /** arrange */
      /** act */
      /** assert */
    });
  });
});
