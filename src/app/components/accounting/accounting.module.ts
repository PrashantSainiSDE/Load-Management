import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared/shared-component.module';
import { AccountingRoutingModule } from './accounting-routing.module';
import { BranchReceivableComponent } from './branch-receivable/branch-receivable.component';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { AccountReceivableV2Component } from './account-receivable-v2/account-receivable-v2.component';
import { CarrierPaybleModule } from './carrier-payble/carrier-payble.module';
import { AmountDueComponent } from './sub-component/amount-due/amount-due.component';
import { SubComponentAccountsModule } from './sub-component/sub-component.module';



@NgModule({
  declarations: [
    BranchReceivableComponent,
    AccountReceivableComponent,
    AccountReceivableV2Component,
    AmountDueComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    CarrierPaybleModule,
    SubComponentAccountsModule,
    SharedComponentModule,
  ]
})

export class AccountingModule { }
