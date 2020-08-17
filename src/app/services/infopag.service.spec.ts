import { TestBed } from '@angular/core/testing';

import { InfopagService } from './infopag.service';

describe('InfopagService', () => {
  let service: InfopagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfopagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
