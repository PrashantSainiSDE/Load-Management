import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './tasks/task-management/task-management.component';
import { TagManagementComponent } from './tags/tag-management/tag-management.component';
import { ExpensesManageComponent } from './expenses/expenses-manage/expenses-manage.component';
import { ExpensesCategoriesComponent } from './expenses/expenses-categories/expenses-categories.component';
import { AdvancePaymentManageComponent } from './advance-payment/advance-payment-manage/advance-payment-manage.component';
import { AdvancePaymentDuePaymentsComponent } from './advance-payment/advance-payment-due-payments/advance-payment-due-payments.component';
import { FactoringCompaniesListComponent } from './factoring-companies/factoring-companies-list/factoring-companies-list.component';

const routes: Routes = [
  { path:'' ,redirectTo:'tasks', pathMatch:'full' },
  { path:'tasks',
    children:[
      { path:'', redirectTo:'task-management', pathMatch:'full' },
      { path:'task-management', component: TaskManagementComponent },
    ]
  },
  { path:'tags',
    children:[
      { path:'', redirectTo:'tag-management', pathMatch:'full' },
      { path:'tag-management', component: TagManagementComponent },
    ]
  },
  { path:'expenses',
    children:[
      { path:'', redirectTo:'expenses-manage', pathMatch:'full' },
      { path:'expenses-manage', component: ExpensesManageComponent },
      { path:'expenses-categories', component: ExpensesCategoriesComponent },
    ]
  },
  { path:'advance-payment',
    children:[
      { path:'', redirectTo:'advance-payment-manage', pathMatch:'full' },
      { path:'advance-payment-manage', component: AdvancePaymentManageComponent },
      { path:'advance-payment-due-payments', component: AdvancePaymentDuePaymentsComponent },
    ]
  },
  { path:'factoring-companies',
    children:[
      { path:'', redirectTo:'factoring-companies-list', pathMatch:'full' },
      { path:'factoring-companies-list', component: FactoringCompaniesListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
