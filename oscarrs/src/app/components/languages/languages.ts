import { Component } from '@angular/core';

interface Language {
  name: string;
  level: string;
}

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  readonly languages: Language[] = [
    { name: 'Spanish', level: 'Native' },
    { name: 'Valencian', level: 'Native' },
    { name: 'English', level: 'B2 · Certified' },
  ];
}
