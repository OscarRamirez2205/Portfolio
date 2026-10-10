import { Routes } from '@angular/router';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  {
    path: '',
    component: Profile,
    title: 'Oscar Ramirez Sanchez · Portfolio',
  },
  {
    // Juego aislado de PinTheBall (solo el juego, sin usuarios, tienda ni base de datos)
    path: 'PinTheBall',
    loadComponent: () =>
      import('./components/pin-the-ball/pin-the-ball').then((m) => m.PinTheBall),
    title: 'PinTheBall · Oscar Ramirez Sanchez',
  },
  { path: '**', redirectTo: '' },
];
