import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  private _className: string = '';
  private _dummyText: string = '';

  get className() {
    return this._className;
  }

  set className(val: string) {
    this._className = val;
  }

  get dummyText() {
    return this._dummyText;
  }

  set dummyText(val: string) {
    this._dummyText = val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
