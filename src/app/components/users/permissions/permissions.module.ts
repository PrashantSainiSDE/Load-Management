import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { PermissionGroupsComponent } from './permission-groups/permission-groups.component';

@NgModule({
  declarations: [
    PermissionGroupsComponent,
    GroupListComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ],
})
export class PermissionsModule { }
