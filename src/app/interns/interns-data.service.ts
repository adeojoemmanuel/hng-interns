import { InternInterface } from './internInterface';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

@Injectable()
export class InternsDataService {

  private _internsUrl = '../assets/api/interns.json';

  constructor(private _http: Http) {}

  getInterns(): Observable<InternInterface[]> {
    return this._http.get(this._internsUrl)
            .map((response: Response) => response.json());
  }

  getInternData(name: string) {
    return this.getInterns()
            .map((intern: InternInterface[]) => intern.find(p => p.name === name))
            .do(data => console.log('Intern: ' + JSON.stringify(data)));
  }

}
