import { InternInterface } from '../interns/internInterface';
import { InternsDataService } from '../interns/interns-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-internprofile',
  templateUrl: './internprofile.component.html',
  styleUrls: ['./internprofile.component.css']
})
export class InternProfileComponent implements OnInit {
  title: string;
  intern;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router, private _internsService: InternsDataService) { }

  ngOnInit(): void {
    const name = this._route.snapshot.params['name'];
    this.title = name;
    this.sub = this._route.params.subscribe(
        params => {
            const name: string = params['name'];
            this.intern = this.getIntern(name);
        });
  }

  getIntern(name: string) {
    this._internsService.getInternData(name).subscribe(
      intern => this.intern = intern
    );
  }

  onReturn(): void {
    this._router.navigate(['/interns']);
  }

}
