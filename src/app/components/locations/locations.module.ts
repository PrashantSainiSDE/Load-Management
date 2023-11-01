import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { SharedComponentModule } from '../shared/shared-component.module';
import { locationsRoutingModule } from './locations-routing.module';


@NgModule({
  declarations: [
    LocationListComponent
  ],
  imports: [
    CommonModule,
    locationsRoutingModule,
    SharedComponentModule,
  ]
})
export class LocationsModule { }
