import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() p;
  brandColor: String;

  constructor() { }

  ngOnInit() {
    this.brandColor = this.p.agency.brandingColors.primary;
  }

}
