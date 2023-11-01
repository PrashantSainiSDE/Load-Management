import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRatingComponent } from './customer-rating.component';

describe('CustomerRatingComponent', () => {
  let component: CustomerRatingComponent;
  let fixture: ComponentFixture<CustomerRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
