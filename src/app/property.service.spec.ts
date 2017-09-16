import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

import { PropertyService } from './property.service';


describe('PropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PropertyService,
      ]
    });
  });

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));

});
