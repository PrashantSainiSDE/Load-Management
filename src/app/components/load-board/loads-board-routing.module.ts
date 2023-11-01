import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoadBoardListComponent } from "./load-board-list/load-board-list.component";
import { TemplateListComponent } from "./template-list/template-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'template-list', pathMatch: 'full' },
  { path: 'template-list', component: TemplateListComponent },
  { path: 'load-board-list', component: LoadBoardListComponent },
];

@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoadsBoardRoutingModule {}
