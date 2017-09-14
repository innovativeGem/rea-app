import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit  {
  self = this;
  // properties: Observable<any[]>;
  // savedProperties: Observable<any[]>;
  properties: any[] = [];
  savedProperties: any[] = [];

  @ViewChildren('savedprops') props: QueryList<ElementRef>;
  // @ViewChild(PropertyComponent) prop: PropertyComponent;

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

  ngAfterViewInit() {
    // this.props.forEach(propInstance => console.log(propInstance));
    // console.log(this.props);
    this.props.changes.subscribe(changes => {
      console.log(changes);
      // changes.nativeElement.isspbtn = false;
      /*
      this.props.forEach(e => {
        e.nativeElement.isspbtn = true;
      });
      */
    });

    // this.prop.swapBtns(this.prop);
    // console.log(this.prop);
  }

}
