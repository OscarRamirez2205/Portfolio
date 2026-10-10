import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-status',
  imports: [RouterLink],
  templateUrl: './status.html',
  styleUrl: './status.scss',
})
export class Status {
  readonly githubUrl = 'https://github.com/OscarRamirez2205';
}
