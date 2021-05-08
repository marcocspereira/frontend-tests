import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeComponent } from './ze.component';

describe('ButtonComponent', () => {
  let component: ZeComponent;
  let fixture: ComponentFixture<ZeComponent>;

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
});
