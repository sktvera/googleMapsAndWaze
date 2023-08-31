import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WazeButtonComponent } from './waze-button.component';

describe('WazeButtonComponent', () => {
  let component: WazeButtonComponent;
  let fixture: ComponentFixture<WazeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WazeButtonComponent]
    });
    fixture = TestBed.createComponent(WazeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
