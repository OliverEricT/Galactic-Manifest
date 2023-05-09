import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsGridComponent } from './statistics-grid.component';

describe('StatisticsGridComponent', () => {
  let component: StatisticsGridComponent;
  let fixture: ComponentFixture<StatisticsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
