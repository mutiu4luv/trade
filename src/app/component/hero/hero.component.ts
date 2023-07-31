import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  username!: string;
  password!: string;

  onSubmit() {
    // You can add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
