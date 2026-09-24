import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';

@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('oscarrs');
}
