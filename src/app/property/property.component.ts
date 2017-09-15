import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() p;
  @Input() isspbtn: Boolean = false;
  @Output() saveBtnClicked = new EventEmitter();
  brandColor: String;
  isBtnVisible: Boolean = false;

  constructor() { }

  handleSaveEvent(obj) {
    this.saveBtnClicked.emit(obj);
  }

  ngOnInit() {
    this.brandColor = this.p.agency.brandingColors.primary;
  }

}
