import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagementComponent } from './task-management/task-management.component';
import { SharedComponentModule } from '../../shared/shared-component.module';



@NgModule({
  declarations: [
    TaskManagementComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class TasksModule { }
