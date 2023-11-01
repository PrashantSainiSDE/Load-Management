import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRatesRoutingModule } from './daily-rates-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { DailyRatesListComponent } from './daily-rates-list/daily-rates-list.component';
import { DownloadRoutsCSVComponent } from './download-routs-csv/download-routs-csv.component';


@NgModule({
  declarations: [
    DailyRatesListComponent,
    DownloadRoutsCSVComponent
  ],
  imports: [
    CommonModule,
    DailyRatesRoutingModule,
    SharedComponentModule,
  ]
})
export class DailyRatesModule { }
