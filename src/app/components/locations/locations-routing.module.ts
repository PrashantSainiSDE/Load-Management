import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocationListComponent } from "./location-list/location-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'location-list', pathMatch: 'full' },
  { path: 'location-list', component: LocationListComponent },
];

@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class locationsRoutingModule {}
