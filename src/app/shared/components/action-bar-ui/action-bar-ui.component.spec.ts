import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarUiComponent } from './action-bar-ui.component';

describe('ActionBarUiComponent', () => {
  let component: ActionBarUiComponent;
  let fixture: ComponentFixture<ActionBarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionBarUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionBarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
