/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerarActaService } from './generar-acta.service';

describe('GenerarActaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerarActaService]
    });
  });

  it('should ...', inject([GenerarActaService], (service: GenerarActaService) => {
    expect(service).toBeTruthy();
  }));
});
