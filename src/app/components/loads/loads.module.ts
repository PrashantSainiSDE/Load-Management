import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadsRoutingModule } from './loads-routing.module';
import { DeliveredLoadsComponent } from './delivered-loads/delivered-loads.component';
import { ListLoadsComponent } from './list-loads/list-loads.component';
import { LoadRatingsComponent } from './load-ratings/load-ratings.component';
import { LoadSearchComponent } from './load-search/load-search.component';
import { LockedLoadsComponent } from './locked-loads/locked-loads.component';
import { PossibleClaimsComponent } from './possible-claims/possible-claims.component';
import { SendLoadsToCarriersComponent } from './send-loads-to-carriers/send-loads-to-carriers.component';
import { SharedComponentModule } from '../shared/shared-component.module';
import { SubComponentloadsModule } from './sub-component/sub-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeliveredLoadsComponent,
    ListLoadsComponent,
    LoadRatingsComponent,
    LoadSearchComponent,
    LockedLoadsComponent,
    PossibleClaimsComponent,
    SendLoadsToCarriersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadsRoutingModule,
    SubComponentloadsModule,
    SharedComponentModule,
  ]
})
export class LoadsModule { }
