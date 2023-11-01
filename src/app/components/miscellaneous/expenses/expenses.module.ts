import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesManageComponent } from './expenses-manage/expenses-manage.component';
import { ExpensesCategoriesComponent } from './expenses-categories/expenses-categories.component';
import { SharedComponentModule } from '../../shared/shared-component.module';



@NgModule({
  declarations: [
    ExpensesManageComponent,
    ExpensesCategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class ExpensesModule { }
