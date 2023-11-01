import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarrierPaybleComponent } from './list-carrier-payble/list-carrier-payble.component';
import { SharedComponentModule } from '../../shared/shared-component.module';



@NgModule({
  declarations: [
    ListCarrierPaybleComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class CarrierPaybleModule { }
