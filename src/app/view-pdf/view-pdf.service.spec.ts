/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewPDFService } from './view-pdf.service';

describe('ViewPDFService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewPDFService]
    });
  });

  it('should ...', inject([ViewPDFService], (service: ViewPDFService) => {
    expect(service).toBeTruthy();
  }));
});
