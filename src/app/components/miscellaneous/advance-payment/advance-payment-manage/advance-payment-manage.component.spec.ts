import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePaymentManageComponent } from './advance-payment-manage.component';

describe('AdvancePaymentManageComponent', () => {
  let component: AdvancePaymentManageComponent;
  let fixture: ComponentFixture<AdvancePaymentManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancePaymentManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancePaymentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
