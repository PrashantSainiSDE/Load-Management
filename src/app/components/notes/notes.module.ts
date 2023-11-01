import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { DailyCarriersCommentsComponent } from './daily-carriers-comments/daily-carriers-comments.component';
import { DailyCustomersCommentsComponent } from './daily-customers-comments/daily-customers-comments.component';
import { SharedComponentModule } from '../shared/shared-component.module';


@NgModule({
  declarations: [
    DailyCarriersCommentsComponent,
    DailyCustomersCommentsComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedComponentModule,
  ]
})
export class NotesModule { }
