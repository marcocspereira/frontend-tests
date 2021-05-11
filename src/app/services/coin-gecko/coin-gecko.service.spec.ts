import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { HttpDummyWrapperService } from '../http-dummy-wrapper/http-dummy-wrapper.service';
import { CoinGeckoService } from './coin-gecko.service';
import { dogecoin } from './mocks/dogecoin.mock';

describe('CoinGeckoService', () => {
  let spectator: SpectatorService<CoinGeckoService>;
  const createService = createServiceFactory({
    service: CoinGeckoService,
    providers: [],
    mocks: [HttpDummyWrapperService],
  });

  beforeEach(() => (spectator = createService()));

  describe('getCoin', () => {
    it('should return details of required coin', () => {
      /** arrange */
      let result: any;
      const httpWrapper = spectator.inject(HttpDummyWrapperService);
      httpWrapper.get.and.returnValue(dogecoin);

      /** act */
      result = spectator.service.getCoin('dogecoin');

      /** assert */
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
