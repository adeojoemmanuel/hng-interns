/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternPageGuardService } from './intern-page-guard.service';

describe('InternPageGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternPageGuardService]
    });
  });

  it('should ...', inject([InternPageGuardService], (service: InternPageGuardService) => {
    expect(service).toBeTruthy();
  }));
});
