import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Наши услуги</h2>
    <div class="services-grid">
      <div class="service-card" *ngFor="let service of services">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <span class="price">{{ service.price }}</span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 2rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .service-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1.5rem;
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .price {
      display: inline-block;
      background-color: #2c3e50;
      color: white;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      margin-top: 0.5rem;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'Бухгалтерское сопровождение',
      description: 'Полное ведение бухгалтерского и налогового учета',
      price: 'от 5 000 ₽/мес'
    },
    {
      title: 'Налоговая отчетность',
      description: 'Подготовка и сдача налоговой отчетности',
      price: 'от 3 000 ₽/мес'
    },
    {
      title: 'Зарплатный проект',
      description: 'Расчет заработной платы и кадровый учет',
      price: 'от 2 000 ₽/мес'
    },
    {
      title: 'Восстановление учета',
      description: 'Восстановление бухгалтерского и налогового учета',
      price: 'от 10 000 ₽'
    }
  ];
}
