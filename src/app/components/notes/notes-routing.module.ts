import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyCarriersCommentsComponent } from './daily-carriers-comments/daily-carriers-comments.component';
import { DailyCustomersCommentsComponent } from './daily-customers-comments/daily-customers-comments.component';

const routes: Routes = [
  { path: '', redirectTo: 'comments', pathMatch: 'full' },
  { path:'comments',
    children:[
      { path:'', redirectTo:'daily-carriers', pathMatch:'full' },
      { path: 'daily-carriers', component: DailyCarriersCommentsComponent },
      { path: 'daily-customers', component: DailyCustomersCommentsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
