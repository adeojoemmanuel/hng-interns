import { InternsDataService } from './interns-data.service';
import { InternInterface } from './internInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent {

  title = 'Meet The Surviving Interns';

  interns: InternInterface[];

  constructor(private _internsService: InternsDataService) {
    this._internsService.getInterns()
          .subscribe(
            interns => this.interns = interns
          );
  }

}
