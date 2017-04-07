/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddReunionService } from './add-reunion.service';

describe('AddReunionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddReunionService]
    });
  });

  it('should ...', inject([AddReunionService], (service: AddReunionService) => {
    expect(service).toBeTruthy();
  }));
});
