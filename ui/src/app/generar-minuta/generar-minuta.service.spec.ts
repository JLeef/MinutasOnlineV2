/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerarMinutaService } from './generar-minuta.service';

describe('GenerarMinutaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerarMinutaService]
    });
  });

  it('should ...', inject([GenerarMinutaService], (service: GenerarMinutaService) => {
    expect(service).toBeTruthy();
  }));
});
