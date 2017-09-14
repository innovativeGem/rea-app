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

//  getProperties() {
    /*
    this._http.get(PROPERTIES_URL)
    .map((res: Response) => this.data = res.json());
    */
    /*
    this.props = this._http.get(PROPERTIES_URL)
    .map((res: Response) => res.json().results);
    this.savedProps = this._http.get(PROPERTIES_URL)
    .map((res: Response) => res.json().saved);
    */
/*
    return this._http.get(PROPERTIES_URL)
    .map((res: Response) => res.json().results);

  }
*/

  getProperties() {
    return this._http.get(PROPERTIES_URL)
    .map((res: Response) => res.json());
  }

}
