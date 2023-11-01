import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';

const routes: Routes = [
  { path:'' ,redirectTo:'activity-logs', pathMatch:'full' },
  { path:'activity-logs', component: ActivityLogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
