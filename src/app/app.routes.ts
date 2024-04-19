import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Kalkulator1Component } from './kalkulator1/kalkulator1.component';
import { Kalkulator2Component } from './kalkulator2/kalkulator2.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reaktiv', component: Kalkulator1Component },
  { path: 'sablonvezerelt', component: Kalkulator2Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
