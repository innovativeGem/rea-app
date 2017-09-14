import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

const PROPERTIES_URL = 'assets/mock-data.json';

@Injectable()
export class PropertyService {
  // data: any;
  props: Observable<any[]>;
  savedProps: Observable<any[]>;

  constructor(private _http: Http) { }

  getProperties() {
    return this._http.get(PROPERTIES_URL)
    .map((res: Response) => res.json());
  }

}
