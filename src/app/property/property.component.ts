import { Component, Input, OnInit } from '@angular/core';

import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() p;
  brandColor: String;
  btnDisplay: Boolean;

  constructor(private _propertyService: PropertyService) { }

  addRemoveObj(obj) {
    console.log(obj.id);
    /*
    const savProps = this._propertyService.savedProps;
    savProps.forEach(e => {
      console.log(e);
      e.forEach(p => {
        console.log(p.id);
        if (p.id !== obj.id) {
          // this._propertyService.props.merge(obj);
        }
      });
      // savProps.merge(e);
    });
    console.log(obj.id + ' savProps: ' + savProps);
    // savProps = savProps.filter(savProp => savProp[0].id !== obj.id);
    // console.log('savProps2: ' + savProps);
    // console.log('properties from child: ' + this._propertyService.props);
    this._propertyService.props.forEach(e => {
      console.log('e: ' + e[0].id);
    });
    */
  }

  ngOnInit() {
    this.brandColor = this.p.agency.brandingColors.primary;
    this.btnDisplay = false;
  }

}
