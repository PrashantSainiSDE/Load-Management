import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancePaymentManageComponent } from './advance-payment-manage/advance-payment-manage.component';
import { AdvancePaymentDuePaymentsComponent } from './advance-payment-due-payments/advance-payment-due-payments.component';
import { SharedComponentModule } from '../../shared/shared-component.module';



@NgModule({
  declarations: [
    AdvancePaymentManageComponent,
    AdvancePaymentDuePaymentsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class AdvancePaymentModule { }
