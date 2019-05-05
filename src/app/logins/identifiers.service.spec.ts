import { TestBed } from '@angular/core/testing';

import { IdentifiersService } from './identifiers.service';

describe('IdentifiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentifiersService = TestBed.get(IdentifiersService);
    expect(service).toBeTruthy();
  });
});
