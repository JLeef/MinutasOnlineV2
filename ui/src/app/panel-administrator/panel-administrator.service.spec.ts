/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PanelAdministratorService } from './panel-administrator.service';

describe('PanelAdministratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelAdministratorService]
    });
  });

  it('should ...', inject([PanelAdministratorService], (service: PanelAdministratorService) => {
    expect(service).toBeTruthy();
  }));
});
