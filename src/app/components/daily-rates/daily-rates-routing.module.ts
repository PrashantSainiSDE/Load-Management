import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRatesListComponent } from './daily-rates-list/daily-rates-list.component';
import { DownloadRoutsCSVComponent } from './download-routs-csv/download-routs-csv.component';

const routes: Routes = [
  { path: '', redirectTo: 'daily-rates-list', pathMatch: 'full' },
  { path:'daily-rates-list', component: DailyRatesListComponent },
  { path:'download-routs-csv', component: DownloadRoutsCSVComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRatesRoutingModule { }
