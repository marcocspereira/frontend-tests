import {
  Component,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ViewChild,
  Input,
} from '@angular/core';

export type ButtonClass = 'danger' | 'success';

@Component({
  selector: 'ze',
  templateUrl: './ze.component.html',
  styleUrls: ['./ze.component.scss'],
})
export class ZeComponent implements AfterViewInit {
  /**
   * The !: (Definite Assignment Assertion)
   * tells TS that this var will have a value at runtime
   * (Not the best fix, but it is OK for the purpose of this lesson)
   * */
  @ViewChild('dummy') dummyButton!: ElementRef<HTMLButtonElement>;

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

  @Input()
  set dummyText(val: string) {
    this._dummyText = val;
  }

  constructor(private _renderer2: Renderer2, private _el: ElementRef) {}

  ngAfterViewInit(): void {
    this._udpateButtonClass();
  }

  private _udpateButtonClass() {
    this.dummyButton.nativeElement.classList.forEach((element) => {
      this._renderer2.removeClass(this.dummyButton.nativeElement, element);
    });
    this._renderer2.addClass(this.dummyButton.nativeElement, this.className);
  }
}
