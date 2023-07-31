import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  imageurl: string = 'assets/logo-dark.svg';
  isScrolled: boolean = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50; // Add the 'scrolled' class when the user scrolls down 50px
  }

  // isMobileMenuOpen = false;
  // isDropdownOpen = false;

  // toggleMenu() {
  //   this.isMobileMenuOpen = !this.isMobileMenuOpen;
  //   console.log('mobile', this.isMobileMenuOpen);
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  //   console.log(this.isDropdownOpen);
  // }
}
