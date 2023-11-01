import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { BranchesModule } from './branches/branches.module';
import { PermissionsModule } from './permissions/permissions.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedComponentModule,
    BranchesModule,
    PermissionsModule,
  ],
})
export class UsersModule { }
