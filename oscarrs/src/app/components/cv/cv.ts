import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  /** Pon tu CV en public/assets/cv/ con este nombre de archivo */
  readonly cvUrl = 'assets/cv/Oscar_Ramirez_Sanchez_CV.pdf';
  readonly cvFileName = 'Oscar_Ramirez_Sanchez_CV.pdf';
}
