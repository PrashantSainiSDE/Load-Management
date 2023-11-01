import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { TrailerListComponent } from './trailer-list/trailer-list.component';



@NgModule({
  declarations: [
    TrailerListComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
  ]
})
export class TrailersModule { }
