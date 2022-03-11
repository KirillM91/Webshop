import { TestBed } from '@angular/core/testing';

import { BuyButtonComunicationService } from './buy-button-comunication.service';

describe('BuyButtonComunicationService', () => {
  let service: BuyButtonComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyButtonComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
