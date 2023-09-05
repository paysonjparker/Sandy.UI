import { TestBed } from '@angular/core/testing';

import { GolferService } from './golfer.service';

describe('GolferService', () => {
  let service: GolferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
