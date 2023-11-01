import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { PaymentAdjustComponent } from './payment-adjust/payment-adjust.component';



@NgModule({
  declarations: [
    PaymentAdjustComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class SubComponentAccountsModule { }
