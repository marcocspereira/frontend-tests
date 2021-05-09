import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeComponent } from './ze.component';

xdescribe('ZeComponent with TestBed', () => {
  let component: ZeComponent;
  let fixture: ComponentFixture<ZeComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the button class name according to the [className] input', () => {
    /** arrange **/
    component.className = 'danger';
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();

    /**act **/
    const button = nativeElement.querySelector('button') as HTMLButtonElement;

    /** assert **/
    expect(button.classList.contains('danger')).toBeTruthy();
    expect(button.classList.contains('success')).toBeFalsy();
  });
});
