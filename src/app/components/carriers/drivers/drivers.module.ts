import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverApplicationComponent } from './driver-application/driver-application.component';



import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    DriverListComponent,
    DriverApplicationComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule,


    MatStepperModule,



  ]
})
export class DriversModule { }
