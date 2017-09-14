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
  // properties: Observable<any[]>;
  // savedProperties: Observable<any[]>;
  properties: any[] = [];
  savedProperties: any[] = [];

  constructor(private _propertyService: PropertyService) { }

  loadProperties() {
    // this.properties = this._propertyService.props;
    this._propertyService.getProperties().subscribe((data) => this.properties = data.results);
    this._propertyService.getProperties().subscribe((data) => this.savedProperties = data.saved);
    // console.log('properties: ' + this.properties);
  }

  handleEventSaved(data) {
    // console.log('received: ' + data.price);
    this.savedProperties.push(data);
    this.properties = this.properties.filter(obj => obj.id !== data.id);
  }

  handleEventRemove(data) {
    this.properties.push(data);
    this.savedProperties = this.savedProperties.filter(obj => obj.id !== data.id);
  }

  ngOnInit() {
    this._propertyService.getProperties();
    // this._propertyService.getProperties2();
    this.loadProperties();
  }

}
