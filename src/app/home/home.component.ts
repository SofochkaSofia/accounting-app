import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>Бухгалтерские услуги для вашего бизнеса</h1>
    <p>Профессиональное ведение бухгалтерии для ИП и ООО</p>
    <button routerLink="/contact">Связаться с нами</button>
  `,
  styles: [`
    :host {
      display: block;
      text-align: center;
      padding: 2rem;
    }

    h1 {
      color: #2c3e50;
      font-size: 2.5rem;
    }

    button {
      background-color: #2c3e50;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 1rem;
    }

    button:hover {
      background-color: #1a252f;
    }
  `]
})
export class HomeComponent {}
