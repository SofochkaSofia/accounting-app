import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="/" routerLinkActive="active">Главная</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Услуги</a></li>
          <li><a routerLink="/about" routerLinkActive="active">О нас</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Контакты</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>&copy; 2024 Бухгалтерские услуги</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: rgb(228, 235, 241);
    }

    header {
      background-color:rgb(15, 22, 28);
      color: white;
      padding: 1rem;
    }

    nav ul {
      display: flex;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    nav a {
      color: white;
      text-decoration: none;
    }

    nav a.active {
      font-weight: bold;
      text-decoration: underline;
    }

    main {
      flex: 1;
      padding: 1rem;
    }

    footer {
      background-color:rgb(15, 22, 28);
      color: white;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'accounting-app';
}
