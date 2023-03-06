import { TestBed } from '@angular/core/testing';

import { ConsumerProductsService } from './consumer-products.service';

describe('ConsumerProductsService', () => {
  let service: ConsumerProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
