import { Component } from '@angular/core';

interface Job {
  initials: string;
  logo: string;
  role: string;
  company: string;
  location: string;
  period: string;
  onRecord: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly jobs: Job[] = [
    {
      initials: 'CS',
      logo: 'assets/experience/carrascostudio.png',
      role: 'Backend Developer (Internship)',
      company: 'Carrasco Studio',
      location: 'Altea, Alicante',
      period: 'Mar 2026 – Jun 2026',
      onRecord: '4 months on record',
      description: 'Backend development in PHP with the Symfony framework.',
    },
    {
      initials: 'JY',
      logo: 'assets/experience/jysk.png',
      role: 'Store Assistant',
      company: 'JYSK',
      location: 'Furniture & home store',
      period: 'Jun 2025 – Feb 2026',
      onRecord: '9 months on record',
      description:
        'Customer service and advice on the sales floor, product replenishment and keeping the store organised.',
    },
    {
      initials: 'EH',
      logo: 'assets/experience/estimar.png',
      role: 'Waiter',
      company: 'Estimar Hoteles',
      location: 'Calpe, Alicante',
      period: 'Summer seasons 2023 – 2024',
      onRecord: '6 months on record',
      description:
        'Table and bar service during the high season, working under pressure as part of a team and attending international guests.',
    },
  ];
}
