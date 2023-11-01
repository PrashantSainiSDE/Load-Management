import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { LogCheckCallComponent } from './log-check-call/log-check-call.component';
import { ManageDocsComponent } from './manage-docs/manage-docs.component';
import { ViewLoadsComponent } from './view-loads/view-loads.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LogCheckCallComponent,
    ManageDocsComponent,
    ViewLoadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentModule,
  ]
})
export class SubComponentloadsModule { }
