import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from './coin.type';

@Injectable({
  providedIn: 'root',
})
export class CoinGeckoService {
  private readonly _coinGeckoAPI = 'api.coingecko.com/api/v3';
  constructor(private _httpClient: HttpClient) {}

  getCoins(): Observable<Array<Coin>> {
    return this._httpClient.get<Array<Coin>>(
      `${this._coinGeckoAPI}/coins/list`
    );
  }

  getCoin(coinId: string): Observable<Coin> {
    return this._httpClient.get<Coin>(`${this._coinGeckoAPI}/coins/${coinId}`);
  }

  getTrends(): Observable<Array<Coin>> {
    return this._httpClient.get<Array<Coin>>(
      `${this._coinGeckoAPI}/search/trending`
    );
  }
}
