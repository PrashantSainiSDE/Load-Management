import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';


@NgModule({
  declarations: [
    ActivityLogsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedComponentModule,
  ],
})
export class SettingsModule { }
