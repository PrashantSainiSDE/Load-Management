import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarrierPaybleComponent } from './carrier-payble/list-carrier-payble/list-carrier-payble.component';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { BranchReceivableComponent } from './branch-receivable/branch-receivable.component';
import { AccountReceivableV2Component } from './account-receivable-v2/account-receivable-v2.component';
import { AmountDueComponent } from './sub-component/amount-due/amount-due.component';
import { PaymentAdjustComponent } from './sub-component/payment-adjust/payment-adjust.component';



const routes: Routes = [
  { path: '', redirectTo: 'carrier-payble', pathMatch: 'full' },
  { path:'carrier-payble', 
    children: [
      { path:'' ,redirectTo:'list', pathMatch:'full' },
      { path:'list', component: ListCarrierPaybleComponent },
    ]
  },
  { path: 'branch-receivable', component: BranchReceivableComponent },
  { path: 'account-receivable', component: AccountReceivableComponent },
  { path: 'account-receivable-v2', component: AccountReceivableV2Component },

  { path: 'amount-due', component: AmountDueComponent },
  { path: 'payment-adjust', component: PaymentAdjustComponent },
];


@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AccountingRoutingModule { }
