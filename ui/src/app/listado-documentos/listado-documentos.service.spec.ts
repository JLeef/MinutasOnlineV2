/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListadoDocumentosService } from './listado-documentos.service';

describe('ListadoDocumentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListadoDocumentosService]
    });
  });

  it('should ...', inject([ListadoDocumentosService], (service: ListadoDocumentosService) => {
    expect(service).toBeTruthy();
  }));
});
