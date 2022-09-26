import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconUiComponent } from './button-icon-ui.component';

describe('ButtonIconUiComponent', () => {
  let component: ButtonIconUiComponent;
  let fixture: ComponentFixture<ButtonIconUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
