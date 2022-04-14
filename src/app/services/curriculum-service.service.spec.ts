import { TestBed } from '@angular/core/testing';

import { CurriculumServiceService } from './curriculum-service.service';

describe('CurriculumServiceService', () => {
  let service: CurriculumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
