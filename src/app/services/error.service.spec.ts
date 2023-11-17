import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(ErrorService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
