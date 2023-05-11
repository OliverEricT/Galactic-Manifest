import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetGridComponent } from './fleet-grid.component';

describe('FleetGridComponent', () => {
  let component: FleetGridComponent;
  let fixture: ComponentFixture<FleetGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetGridComponent]
    });
    fixture = TestBed.createComponent(FleetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
