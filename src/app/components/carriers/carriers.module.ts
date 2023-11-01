import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierListComponent } from './carrier-list/carrier-list.component';
import { CarrierOnBoardComponent } from './carrier-on-board/carrier-on-board.component';
import { SearchedCarriersComponent } from './searched-carriers/searched-carriers.component';
import { DriversModule } from './drivers/drivers.module';
import { TrailersModule } from './trailers/trailers.module';
import { TrucksModule } from './trucks/trucks.module';
import { CarriersRoutingModule } from './carriers-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';



@NgModule({
  declarations: [
    CarrierListComponent,
    CarrierOnBoardComponent,
    SearchedCarriersComponent
  ],
  imports: [
    CommonModule,
    CarriersRoutingModule,
    TrucksModule,
    DriversModule,
    TrailersModule,
    SharedComponentModule,
  ]
})
export class CarriersModule { }
