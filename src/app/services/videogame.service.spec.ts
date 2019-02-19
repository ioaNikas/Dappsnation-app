import { TestBed } from '@angular/core/testing';

import { VideogameService } from './videogame.service';

describe('VideogameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideogameService = TestBed.get(VideogameService);
    expect(service).toBeTruthy();
  });
});
