import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearerDialogComponent } from './bearer-dialog.component';

describe('BearerDialogComponent', () => {
  let component: BearerDialogComponent;
  let fixture: ComponentFixture<BearerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
