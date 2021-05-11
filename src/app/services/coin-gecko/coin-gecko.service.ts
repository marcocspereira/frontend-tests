import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpDummyWrapperService } from '../http-dummy-wrapper/http-dummy-wrapper.service';
import { Coin } from './coin.type';
import { Trend } from './trend.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinGeckoService {
  private readonly _coinGeckoAPI = 'https://api.coingecko.com/api/v3';
  constructor(private _httpDummyWrapperService: HttpDummyWrapperService) {}

  /**
   * This method uses HttpDummyWrapperService to get data from CoinGecko API
   * related to all cryptocurrencies available.
   * @returns Observable<Array<Coin>> with a list of all cryptocurrencies
   */
  getCoins(): Observable<Array<Coin>> {
    return this._httpDummyWrapperService.get<Array<Coin>>(
      `${this._coinGeckoAPI}/coins/list`
    );
  }

  /**
   * This method uses HttpDummyWrapperService to get data from CoinGecko API
   * related to a given cryptocurrency.
   * @returns Observable<Coin> with details of a given cryptocurrency
   */
  getCoin(coinId: string): Observable<Coin> {
    return this._httpDummyWrapperService.get<Coin>(
      `${this._coinGeckoAPI}/coins/${coinId}`
    );
  }

  /**
   * This method uses HttpDummyWrapperService to get data from CoinGecko API
   * related to trending coins.
   * @returns Observable<Trend> with all trending exchantes and cryptocurrencies
   */
  getTrends(): Observable<Trend> {
    return this._httpDummyWrapperService.get<Trend>(
      `${this._coinGeckoAPI}/search/trending`
    );
  }
}
