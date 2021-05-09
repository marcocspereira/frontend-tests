import { Component, AfterViewInit, Input } from '@angular/core';
import { CoinGeckoService } from 'src/app/services/coin-gecko/coin-gecko.service';
import { Coin } from 'src/app/services/coin-gecko/coin.type';

@Component({
  selector: 'coin-gecko',
  templateUrl: './coin-gecko.component.html',
  styleUrls: ['./coin-gecko.component.scss'],
})
export class CoinGeckoComponent implements AfterViewInit {
  @Input() coinId: string = '';
  coin: Coin | undefined;
  topCoins: Array<Coin> | undefined;

  constructor(private _coinGeckoService: CoinGeckoService) {}

  ngAfterViewInit(): void {
    this.getAllCoins();
  }

  getCoinData(selectedCoin: any) {
    const coinId = selectedCoin.coinId;
    this.coinId = coinId;
    this._coinGeckoService
      .getCoin(coinId)
      .subscribe((coinData) => (this.coin = coinData));
  }

  getAllCoins() {
    this._coinGeckoService.getCoins().subscribe((coins) => {
      this.topCoins = coins;
    });
  }
}
