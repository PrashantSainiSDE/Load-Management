import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { ManageBranchesComponent } from './manage-branches/manage-branches.component';

@NgModule({
  declarations: [
    ManageBranchesComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule
  ],
})
export class BranchesModule { }
