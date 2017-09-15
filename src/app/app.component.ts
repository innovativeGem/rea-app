import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PropertyService } from './property.service';

import { PropertyComponent } from './property/property.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PropertyService
  ],
})
export class AppComponent implements OnInit  {
  properties: any[] = [];
  savedProperties: any[] = [];

  constructor(private _propertyService: PropertyService) { }

  loadProperties() {
    this._propertyService.getProperties().subscribe((data) => this.properties = data.results);
    this._propertyService.getProperties().subscribe((data) => this.savedProperties = data.saved);
  }

  handleEventSaved(data) {
    this.savedProperties.push(data);
    this.properties = this.properties.filter(obj => obj.id !== data.id);
  }

  handleEventRemove(data) {
    this.properties.push(data);
    this.savedProperties = this.savedProperties.filter(obj => obj.id !== data.id);
  }

  ngOnInit() {
    this._propertyService.getProperties();
    this.loadProperties();
  }

}
