import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBranchesComponent } from './branches/manage-branches/manage-branches.component';
import { PermissionGroupsComponent } from './permissions/permission-groups/permission-groups.component';
import { GroupListComponent } from './permissions/group-list/group-list.component';

const routes: Routes = [
  { path:'' ,redirectTo:'branches', pathMatch:'full' },
  { path:'branches',
    children:[
      { path:'', redirectTo:'manage-branches', pathMatch:'full' },
      { path:'manage-branches', component: ManageBranchesComponent },
    ]
  },
  { path:'permissions',
    children:[
      { path:'', redirectTo:'permission-groups', pathMatch:'full' },
      { path:'permission-groups', component: PermissionGroupsComponent },
      { path:'group-list', component: GroupListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
