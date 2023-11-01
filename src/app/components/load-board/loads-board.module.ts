import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadsBoardRoutingModule } from './loads-board-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { TemplateListComponent } from './template-list/template-list.component';
import { LoadBoardListComponent } from './load-board-list/load-board-list.component';



@NgModule({
  declarations: [
    TemplateListComponent,
    LoadBoardListComponent,
  ],
  imports: [
    CommonModule,
    LoadsBoardRoutingModule,
    SharedComponentModule,
  ]
})
export class LoadsBoardModule { }
