import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {
  private botonPokeball: HTMLElement | null = null;
  private rojoPokeball: HTMLElement | null = null;

  ngAfterViewInit() {
    this.botonPokeball = document.querySelector('.botonpokeball');
    this.rojoPokeball = document.querySelector('.rojopokeball');

    if (this.botonPokeball && this.rojoPokeball) {
      this.botonPokeball.addEventListener('mouseenter', () => this.onMouseEnter());
      this.botonPokeball.addEventListener('mouseleave', () => this.onMouseLeave());
    }
  }

  onMouseEnter() {
    if (this.rojoPokeball) {
      this.rojoPokeball.style.opacity = '1';
      this.rojoPokeball.style.visibility = 'visible';
    }
  }

  onMouseLeave() {
    if (this.rojoPokeball) {
      this.rojoPokeball.style.opacity = '0';
      this.rojoPokeball.style.visibility = 'hidden';
    }
  }
  
}
