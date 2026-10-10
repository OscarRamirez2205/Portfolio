import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProjectStat {
  /** Valor grande (opcional). Si no hay, la etiqueta se muestra como texto destacado. */
  value?: string;
  label: string;
}

interface Project {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  playRoute: string | null;
  repoUrl: string | null;
  tags: string[];
  stats: ProjectStat[];
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      name: 'PinTheBall',
      subtitle: 'Final degree project · DAW',
      description:
        'A 3D pinball game for the browser with real-time physics. This is a simplified version of my ' +
        'final degree project, without user management, ball skins or leaderboards: just the playable game. ' +
        'You can check out the original project on my GitHub.',
      image: 'assets/ptb/img/Logo_PTB.png',
      playRoute: '/PinTheBall',
      repoUrl: 'https://github.com/OscarRamirez2205/PinTheBall',
      tags: ['Angular', 'Babylon.js', 'Havok Physics', 'Blender', 'Laravel'],
      stats: [
        { value: '3D', label: 'WebGL' },
        { label: 'Pinball machine' },
        { label: 'Retro experience' },
      ],
    },
  ];
}
