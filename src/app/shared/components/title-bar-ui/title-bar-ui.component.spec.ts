import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarUiComponent } from './title-bar-ui.component';

describe('TitleBarUiComponent', () => {
  let component: TitleBarUiComponent;
  let fixture: ComponentFixture<TitleBarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBarUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
