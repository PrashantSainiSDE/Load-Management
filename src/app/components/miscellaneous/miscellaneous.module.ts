import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { AdvancePaymentModule } from './advance-payment/advance-payment.module';
import { ExpensesModule } from './expenses/expenses.module';
import { TagsModule } from './tags/tags.module';
import { TasksModule } from './tasks/tasks.module';
import { FactoringCompaniesModule } from './factoring-companies/factoring-companies.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule,
    SharedComponentModule,
    TasksModule,
    TagsModule,
    ExpensesModule,
    AdvancePaymentModule,
    FactoringCompaniesModule,
  ]
})
export class MiscellaneousModule { }
