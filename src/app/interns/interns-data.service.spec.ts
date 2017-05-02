/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternsDataService } from './interns-data.service';

describe('InternsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternsDataService]
    });
  });

  it('should ...', inject([InternsDataService], (service: InternsDataService) => {
    expect(service).toBeTruthy();
  }));
});
