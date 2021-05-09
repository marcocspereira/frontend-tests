import { HttpClient } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { CoinGeckoService } from './coin-gecko.service';
import { dogecoin } from './mocks/dogecoin.mock';

xdescribe('CoinGeckoService', () => {
  let spectator: SpectatorService<CoinGeckoService>;
  const createService = createServiceFactory({
    service: CoinGeckoService,
    providers: [],
    mocks: [],
  });

  beforeEach(() => (spectator = createService()));

  describe('getCoin', () => {
    it('should call CoinGecko API through HttpClient', () => {
      /** arrange */
      let result: any;
      const url: string = 'https://api.coingecko.com/api/v3/coins/dogecoin';
      const apiSpy = spyOn(spectator.inject(HttpClient), 'get');
      apiSpy.withArgs(url).and.returnValue(dogecoin);

      /** act */
      result = spectator.service.getCoin('dogecoin');

      /** assert */
      expect(apiSpy).toHaveBeenCalled();
      expect(result).toEqual(dogecoin);
    });
  });

  describe('getTrends', () => {
    it('should return a list of coins', () => {
      /** arrange */
      /** act */
      /** assert */
    });
  });
});
