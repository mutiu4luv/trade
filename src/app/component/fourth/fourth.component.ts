import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
})
export class FourthComponent {
  items = [
    {
      number: '1',
      description: 'Create a MyFXTM profile',
    },
    {
      number: '2',
      description: 'Choose your account type',
    },
    {
      number: '3',
      description: 'Fund your trading account',
    },
    {
      number: '4',
      description: 'Log in to your MT platform',
    },
    {
      number: '5',
      description: 'Start trading!',
    },
  ];

  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];

  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // Add more configuration options as needed
  };
}
