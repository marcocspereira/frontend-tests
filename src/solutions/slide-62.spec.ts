import {
    createServiceFactory,
    mockProvider,
    SpectatorService,
} from '@ngneat/spectator';
import { HttpDummyWrapperService } from '../http-dummy-wrapper/http-dummy-wrapper.service';
import { CoinGeckoService } from './coin-gecko.service';
import { dogecoin } from './mocks/dogecoin.mock';
import { trends } from './mocks/trends.mock';

describe('CoinGeckoService', () => {
    let spectator: SpectatorService<CoinGeckoService>;
    const createService = createServiceFactory({
        service: CoinGeckoService,
        providers: [
            mockProvider(HttpDummyWrapperService, {
                get: () => 'I am a mocked get',
            }),
        ],
        mocks: [],
    });

    beforeEach(() => (spectator = createService()));

    describe('getCoin', () => {
        it('should get coin data from CoinGecko API through HttpDummyWrapperService', () => {
            /** arrange */
            let result: any;
            const url: string = 'https://api.coingecko.com/api/v3/coins/dogecoin';
            const apiSpy = spyOn(spectator.inject(HttpDummyWrapperService), 'get');
            apiSpy.withArgs(url).and.returnValue(dogecoin);

            /** act */
            result = spectator.service.getCoin('dogecoin');

            /** assert */
            expect(apiSpy).toHaveBeenCalled();
            expect(result).toEqual(dogecoin);
        });
    });

    describe('getTrends', () => {
        it('should return a list of trending coins from CoinGecko API through HttpDummyWrapperService', () => {
            /** arrange */
            let result: any;
            const url: string = 'https://api.coingecko.com/api/v3/search/trending';
            const apiSpy = spyOn(spectator.inject(HttpDummyWrapperService), 'get');
            apiSpy.withArgs(url).and.returnValue(trends);

            /** act */
            result = spectator.service.getTrends();

            /** assert */
            expect(apiSpy).toHaveBeenCalled();
            expect(result).toEqual(trends);
        });
    });
});
