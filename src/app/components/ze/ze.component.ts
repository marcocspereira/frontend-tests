import {
  Component,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

export type ButtonClass = 'danger' | 'success';

@Component({
  selector: 'ze',
  templateUrl: './ze.component.html',
  styleUrls: ['./ze.component.scss'],
})
export class ZeComponent implements AfterViewInit {
  @ViewChild('dummy')
  private _dummyButton!: ElementRef<HTMLButtonElement>;

  private _className: ButtonClass = 'success';
  private _dummyText: string = '';

  get className() {
    return this._className;
  }

  set className(val: ButtonClass) {
    this._className = val;
    this._udpateButtonClass();
  }

  get dummyText() {
    return this._dummyText;
  }

  set dummyText(val: string) {
    this._dummyText = val;
  }

  constructor(private _renderer2: Renderer2, private _el: ElementRef) {}

  ngAfterViewInit(): void {
    this._udpateButtonClass();
  }

  private _udpateButtonClass() {
    this._dummyButton.nativeElement.classList.forEach((element) => {
      this._renderer2.removeClass(this._dummyButton.nativeElement, element);
    });
    this._renderer2.addClass(this._dummyButton.nativeElement, this.className);
  }
}
