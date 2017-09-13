import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PropertyService
  ],
})
export class AppComponent implements OnInit  {
  self = this;
  properties: Observable<any[]>;
  savedProperties: Observable<any[]>;

  constructor(private _propertyService: PropertyService) { }

  loadProperties() {
    this.properties = this._propertyService.props;
    this.savedProperties = this._propertyService.savedProps;
    console.log('properties: ' + this.properties);
  }

  ngOnInit() {
    this._propertyService.getProperties();
    this.loadProperties();
  }

}
