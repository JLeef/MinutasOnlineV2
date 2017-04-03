/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerarInformeService } from './generar-informe.service';

describe('GenerarInformeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerarInformeService]
    });
  });

  it('should ...', inject([GenerarInformeService], (service: GenerarInformeService) => {
    expect(service).toBeTruthy();
  }));
});
