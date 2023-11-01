import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeliveredLoadsComponent } from "./delivered-loads/delivered-loads.component";
import { ListLoadsComponent } from "./list-loads/list-loads.component";
import { LoadRatingsComponent } from "./load-ratings/load-ratings.component";
import { LoadSearchComponent } from "./load-search/load-search.component";
import { LockedLoadsComponent } from "./locked-loads/locked-loads.component";
import { PossibleClaimsComponent } from "./possible-claims/possible-claims.component";
import { SendLoadsToCarriersComponent } from "./send-loads-to-carriers/send-loads-to-carriers.component";
import { LogCheckCallComponent } from "./sub-component/log-check-call/log-check-call.component";
import { ManageDocsComponent } from "./sub-component/manage-docs/manage-docs.component";
import { ViewLoadsComponent } from "./sub-component/view-loads/view-loads.component";

const routes: Routes = [
    { path: '', redirectTo: 'loads-list', pathMatch: 'full' },
    { path: 'loads-list', component: ListLoadsComponent },
    { path: 'delivered-loads', component: DeliveredLoadsComponent },
    { path: 'possible-claims', component: PossibleClaimsComponent },
    { path: 'load-search', component: LoadSearchComponent },
    { path: 'load-ratings', component: LoadRatingsComponent },
    { path: 'locked-loads', component: LockedLoadsComponent },
    { path: 'send-loads-to-carriers', component: SendLoadsToCarriersComponent },
    
    
    { path: 'view-load', component: ViewLoadsComponent },
    { path: 'log-check-call', component: LogCheckCallComponent },
    { path: 'manage-docs', component: ManageDocsComponent },
];

@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoadsRoutingModule {}
