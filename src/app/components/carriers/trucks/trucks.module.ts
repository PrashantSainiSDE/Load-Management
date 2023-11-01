import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { TruckListComponent } from './truck-list/truck-list.component';



@NgModule({
  declarations: [
    TruckListComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class TrucksModule { }
