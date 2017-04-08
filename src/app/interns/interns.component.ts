import { InternInterface } from './internInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent {

  interns: InternInterface[] = [
    {
    'name': 'Opia Chuks',
    'skill': 'Front End Developer',
    'image': 'chuks.jpg',
    'fav_quote': 'I am the punishment of God to you',
    'fav_quote_author': 'Ong Bak',
    'social_media': ['facebook', 'twitter']
  }
  ];

}
