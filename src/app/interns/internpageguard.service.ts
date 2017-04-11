import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class InternPageGuardService implements CanActivate {

  internNames = ['Opia Chuks', 'Ozoka Lucky Orobo', 'Valentine Ike Oleka',
                  'Emmanuel Kehinde', 'Seyi Onifade', 'Abiodun Adetona', 'Marija Dubrovska-Hassan', 'Offiong Aniekanabasi',
                  'Okoye Chidi Bartholomew', 'Obieri Chiamaka Grace', 'Namnso Ukpanah', 'Chibuike Emmanuel Osita', 'Onuchukwu Daniel',
                  'Adeyemo Adeola Joseph', 'Friday Godswill', 'Sarah Chima Obianuju', 'Odusanya \'Tomi', 'Kayode Sholanke',
                  'Umar Abdullahi', 'David Inyang-Etoh', 'Mary Mazi', 'Promise Udenkwor', 'Regina Rex', 'Yusuf Yinka'
                ];

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let name = route.url[1].path;
    // if url intern name is not in the above interns name array
    if (this.internNames.indexOf(name) === -1) {
      alert('That Intern Does Not Exist');
      this._router.navigate(['/interns']);
      return false;
    }
    return true;
  }

}
