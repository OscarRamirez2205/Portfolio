import { Component } from '@angular/core';

interface Badge {
  id: string;
  title: string;
  detail: string;
  image: string;
}

@Component({
  selector: 'app-licenses',
  imports: [],
  templateUrl: './licenses.html',
  styleUrl: './licenses.scss',
})
export class Licenses {
  readonly badges: Badge[] = [
    {
      id: 'english-b2',
      title: 'English B2',
      detail: 'Cambridge certificate',
      image: 'assets/badges/english-b2.png',
    },
    {
      id: 'car',
      title: 'Driving licence',
      detail: 'Car · Category B',
      image: 'assets/badges/car-licence.png',
    },
    {
      id: 'moped',
      title: 'Moped licence',
      detail: 'Moped · Category AM',
      image: 'assets/badges/moped-licence.png',
    },
  ];
}
