import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent {
  items = [
    {
      title: 'Tight Spreads',
      description:
        'Tight spreads and fast trade execution, from 0.0 on EUR/USD',
      image: 'assets/first.svg',
    },
    {
      title: 'Flexible Leverage',
      description:
        'Flexible leverage from 1:1 to 1:2000 and trade sizes from 0.01 lots',
      image: 'assets/second.svg',
    },
    {
      title: 'Trading Platforms',
      description: 'etaTrader 4 and MetaTrader 5 on desktop, web or mobile',
      image: 'assets/third.svg',
    },
    {
      title: 'Knowledge',
      description:
        'Free learning to improve your trading skills, no matter your level',
      image: 'assets/fourth.svg',
    },
  ];
}
