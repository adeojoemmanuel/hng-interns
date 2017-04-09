import { InternsDataService } from './interns/interns-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ InternsDataService ]
})
export class AppComponent {}
