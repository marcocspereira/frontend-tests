import { Component, AfterViewInit, Input } from '@angular/core';
import { CoinGeckoService } from 'src/app/services/coin-gecko/coin-gecko.service';
import { Coin } from 'src/app/services/coin-gecko/coin.type';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'coin-gecko',
  templateUrl: './coin-gecko.component.html',
  styleUrls: ['./coin-gecko.component.scss'],
})
export class CoinGeckoComponent implements AfterViewInit {
  @Input() coinId: string = '';
  coin: Coin | undefined;
  topCoins: Array<Coin> | undefined;

  constructor(
    private _coinGeckoService: CoinGeckoService,
    private _dataService: DataService
  ) {}

  ngAfterViewInit(): void {
    this._dataService.reset();
  }

  /**
   * Method that gets data related to a given coin ID from CoinGecko API
   * through CoinGeckoService. Also persists in session storage with DataService.
   * @param selectedCoin input data from template
   */
  getCoinData(selectedCoin: any) {
    const coinId = selectedCoin.coinId;
    this.coinId = coinId;
    this._coinGeckoService.getCoin(coinId).subscribe((coinData) => {
      this.coin = coinData;
      this._dataService.persistItem(selectedCoin, coinData);
    });
  }
}
