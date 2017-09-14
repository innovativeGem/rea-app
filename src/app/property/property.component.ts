import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() p;
  @Output() saveBtnClicked = new EventEmitter();
  brandColor: String;
  isBtnVisible: Boolean = false;
  isspbtn: Boolean;

  // @Input() isBtnVisible: Boolean = false;

  constructor() { }

  handleSaveEvent(obj) {
    this.saveBtnClicked.emit(obj);
    this.swapBtns(obj);
  }

  swapBtns(obj) {
    // console.log('obj class: ' + obj.getAttribute('class'));
      this.isspbtn = false;
  }

  ngOnInit() {
    this.brandColor = this.p.agency.brandingColors.primary;
  }

}
