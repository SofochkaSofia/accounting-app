import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Главная' },
  { path: 'services', component: ServicesComponent, title: 'Услуги' },
  { path: 'about', component: AboutComponent, title: 'О нас' },
  { path: 'contact', component: ContactComponent, title: 'Контакты' },
  { path: '**', redirectTo: '' }
];
