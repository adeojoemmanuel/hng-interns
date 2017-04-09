import { InternInterface } from './internInterface';
import { Injectable } from '@angular/core';

@Injectable()
export class InternsDataService {

  getInterns(): InternInterface[] {
    return [
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

}
