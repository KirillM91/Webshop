import { TestBed } from '@angular/core/testing';

import { CartCheckoutCommunicationService } from './cart-checkout-communication.service';

describe('CartCheckoutCommunicationService', () => {
  let service: CartCheckoutCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCheckoutCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
