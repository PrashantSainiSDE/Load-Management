import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { AdPotentialCustomersComponent } from './ad-potential-customers/ad-potential-customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRatingComponent } from './customer-rating/customer-rating.component';
import { DeactivatedCustomersComponent } from './deactivated-customers/deactivated-customers.component';
import { PotentialCustomerListComponent } from './potential-customer-list/potential-customer-list.component';



@NgModule({
  declarations: [
    CustomerRatingComponent,
    CustomerListComponent,
    DeactivatedCustomersComponent,
    PotentialCustomerListComponent,
    AdPotentialCustomersComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedComponentModule,
  ]
})
export class CustomersModule { }
