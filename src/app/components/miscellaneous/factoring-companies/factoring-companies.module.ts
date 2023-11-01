import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoringCompaniesListComponent } from './factoring-companies-list/factoring-companies-list.component';
import { SharedComponentModule } from '../../shared/shared-component.module';



@NgModule({
  declarations: [
    FactoringCompaniesListComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class FactoringCompaniesModule { }
