import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredLoadsComponent } from './delivered-loads.component';

describe('DeliveredLoadsComponent', () => {
  let component: DeliveredLoadsComponent;
  let fixture: ComponentFixture<DeliveredLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredLoadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveredLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
