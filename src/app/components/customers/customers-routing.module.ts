import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerRatingComponent } from "./customer-rating/customer-rating.component";
import { DeactivatedCustomersComponent } from "./deactivated-customers/deactivated-customers.component";
import { PotentialCustomerListComponent } from "./potential-customer-list/potential-customer-list.component";
import { AdPotentialCustomersComponent } from "./ad-potential-customers/ad-potential-customers.component";

const routes: Routes = [
  { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-rating', component: CustomerRatingComponent },
  { path: 'deactivated-customers', component: DeactivatedCustomersComponent },
  { path: 'potential-customer-list', component: PotentialCustomerListComponent },
  { path: 'ad-potential-customers', component: AdPotentialCustomersComponent },
];

@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule {}
