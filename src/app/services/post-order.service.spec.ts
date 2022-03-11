import { TestBed } from '@angular/core/testing';

import { PostOrderService } from './post-order.service';

describe('PostOrderService', () => {
  let service: PostOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
