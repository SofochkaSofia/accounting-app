import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h2>О нашей компании</h2>

      <div class="about-content">
        <p>
          Мы — команда профессиональных бухгалтеров с многолетним опытом работы в сфере финансового учета
          и налогового консультирования. С 1993 года наши специалисты помогают бизнесу любого масштаба
          вести бухгалтерию четко, прозрачно и в соответствии с актуальным законодательством.
        </p>

        <h3>Почему нам доверяют?</h3>

        <ul class="advantages-list">
          <li>✅ <strong>Опыт и надежность</strong> — работаем на рынке более 30 лет, знаем все тонкости бухгалтерского и налогового учета.</li>
          <li>✅ <strong>Сильная команда</strong> — наши бухгалтеры регулярно повышают квалификацию и следят за изменениями в законодательстве.</li>
          <li>✅ <strong>Индивидуальный подход</strong> — подбираем решения под специфику вашего бизнеса, будь то ИП, ООО или крупное предприятие.</li>
          <li>✅ <strong>Ответственность и конфиденциальность</strong> — гарантируем точность расчетов и полную защиту ваших данных.</li>
        </ul>

        <p class="conclusion">
          Мы не просто ведем бухгалтерию — мы берем на себя финансовые вопросы, чтобы вы могли сосредоточиться
          на развитии бизнеса. Доверьте учет профессионалам!
        </p>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 2rem;
    }

    .about-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    h2 {
      color: #2c3e50;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin: 1.5rem 0 1rem;
    }

    .about-content {
      text-align: left;
      background-color: #f9f9f9;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .advantages-list {
      padding-left: 1.5rem;
      margin: 1.5rem 0;
    }

    .advantages-list li {
      margin-bottom: 0.8rem;
      line-height: 1.5;
    }

    .conclusion {
      font-style: italic;
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid #eee;
    }

    @media (max-width: 600px) {
      .about-content {
        padding: 1.5rem;
      }
    }
  `]
})
export class AboutComponent {}
