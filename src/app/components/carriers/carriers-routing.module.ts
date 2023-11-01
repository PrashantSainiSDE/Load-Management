import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierListComponent } from './carrier-list/carrier-list.component';
import { CarrierOnBoardComponent } from './carrier-on-board/carrier-on-board.component';
import { SearchedCarriersComponent } from './searched-carriers/searched-carriers.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';
import { TruckListComponent } from './trucks/truck-list/truck-list.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { DriverApplicationComponent } from './drivers/driver-application/driver-application.component';



const routes: Routes = [
  { path: '', redirectTo: 'carrier-list', pathMatch: 'full' },
  { path: 'carrier-list', component: CarrierListComponent },
  { path: 'carrier-on-board', component: CarrierOnBoardComponent },
  { path: 'searched-carriers', component: SearchedCarriersComponent},
  { path:'drivers', 
    children: [
      { path:'' ,redirectTo:'', pathMatch:'full' },
      { path:'driver-list', component: DriverListComponent },
      { path:'driver-application', component: DriverApplicationComponent },
    ]
  },
  { path:'trucks', 
    children:[
      { path:'' ,redirectTo:'trucks-list',pathMatch:'full' },
      { path:'truck-list', component: TruckListComponent },
    ]
  },
  { path:'trailers', 
    children:[
      { path:'' ,redirectTo:'trailers-list',pathMatch:'full' },
      { path:'trailer-list', component: TrailerListComponent },
    ]
  },
];


@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarriersRoutingModule { }
