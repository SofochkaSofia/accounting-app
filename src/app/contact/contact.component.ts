import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-container">
      <h2>Контакты</h2>

      <div class="contact-content">
        <p class="intro-text">Мы всегда рады помочь вам с бухгалтерским учетом и ответить на ваши вопросы.</p>

        <div class="contact-details">
          <div class="detail-item">
            <span class="detail-icon">📍</span>
            <div class="detail-text">
              <h3>Адрес:</h3>
              <p>г. Ярославль, ул. Радищева, д. 10/12, офис 10</p>
            </div>
          </div>

          <div class="detail-item">
            <span class="detail-icon">📞</span>
            <div class="detail-text">
              <h3>Телефон:</h3>
              <p>+7 (4852) 123-456</p>
            </div>
          </div>

          <div class="detail-item">
            <span class="detail-icon">✉</span>
            <div class="detail-text">
              <h3>Email:</h3>
              <p>e-mail.ru</p>
            </div>
          </div>

          <div class="detail-item">
            <span class="detail-icon">🕒</span>
            <div class="detail-text">
              <h3>Режим работы:</h3>
              <p>Пн–Пт: 9:00–18:00</p>
              <p>Сб–Вс: выходной</p>
            </div>
          </div>
        </div>

        <div class="map-section">
          <h3>Как нас найти</h3>
          <p class="map-description">Ниже вы можете увидеть наше местоположение на карте.</p>

          <div class="map-container">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p&amp;source=constructor"
              width="100%"
              height="400"
              frameborder="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 2rem;
    }

    .contact-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    h2 {
      color: #2c3e50;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    .contact-content {
      text-align: left;
      background-color: #f9f9f9;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .intro-text {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .contact-details {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .detail-icon {
      font-size: 1.5rem;
      margin-top: 0.3rem;
    }

    .detail-text h3 {
      color: #2c3e50;
      margin: 0 0 0.3rem 0;
      font-size: 1.2rem;
    }

    .detail-text p {
      margin: 0;
      color: #555;
    }

    .map-section {
      margin-top: 2rem;
    }

    .map-section h3 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .map-description {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #555;
    }

    .map-container {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }

    @media (min-width: 768px) {
      .contact-details {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 600px) {
      .contact-content {
        padding: 1.5rem;
      }

      .detail-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `]
})
export class ContactComponent {}
