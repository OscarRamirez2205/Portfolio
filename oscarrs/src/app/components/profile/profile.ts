import { Component } from '@angular/core';
import { Studis } from '../studis/studis';
import { Projects } from '../projects/projects';
import { Languages } from '../languages/languages';
import { Experience } from '../experience/experience';
import { Licenses } from '../licenses/licenses';
import { Status } from '../status/status';
import { Contact } from '../contact/contact';
import { Cv } from '../cv/cv';

@Component({
  selector: 'app-profile',
  imports: [Studis, Projects, Languages, Experience, Licenses, Status, Contact, Cv],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}
