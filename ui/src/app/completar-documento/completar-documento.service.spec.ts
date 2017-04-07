/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompletarDocumentoService } from './completar-documento.service';

describe('CompletarDocumentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletarDocumentoService]
    });
  });

  it('should ...', inject([CompletarDocumentoService], (service: CompletarDocumentoService) => {
    expect(service).toBeTruthy();
  }));
});
