import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePaymentDuePaymentsComponent } from './advance-payment-due-payments.component';

describe('AdvancePaymentDuePaymentsComponent', () => {
  let component: AdvancePaymentDuePaymentsComponent;
  let fixture: ComponentFixture<AdvancePaymentDuePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancePaymentDuePaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancePaymentDuePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
