import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './components/authentication/services/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth',     loadChildren: () => import('./components/authentication/auth.module')   .then(m => m.AuthModule) },
  { path: 'chatbot',  loadChildren: () => import('./components/chatbot/chatbot.module')         .then(m => m.ChatbotModule), canActivate:[AuthGuard] },

  { path: '', component: LayoutComponent, canActivate: [AuthGuard],     //canActivate: [AuthGuard],
    children: [
      { path: 'loads',           loadChildren: () => import('./components/loads/loads.module')                   .then(m => m.LoadsModule),            },
      { path: 'load-board',      loadChildren: () => import('./components/load-board/loads-board.module')        .then(m => m.LoadsBoardModule),       },
      { path: 'locations',       loadChildren: () => import('./components/locations/locations.module')           .then(m => m.LocationsModule),        },
      { path: 'customers',       loadChildren: () => import('./components/customers/customers.module')           .then(m => m.CustomersModule),        },
      { path: 'carriers',        loadChildren: () => import('./components/carriers/carriers.module')             .then(m => m.CarriersModule)          },
      { path: 'users',           loadChildren: () => import('./components/users/users.module')                   .then(m => m.UsersModule),            },
      { path: 'accounting',      loadChildren: () => import('./components/accounting/accounting.module')         .then(m => m.AccountingModule),       },
      { path: 'settings',        loadChildren: () => import('./components/settings/settings.module')             .then(m => m.SettingsModule),         },
      { path: 'notes',           loadChildren: () => import('./components/notes/notes.module')                   .then(m => m.NotesModule),            },
      { path: 'daily-rates',     loadChildren: () => import('./components/daily-rates/daily-rates.module')       .then(m => m.DailyRatesModule),       },
      { path: 'miscellaneous',   loadChildren: () => import('./components/miscellaneous/miscellaneous.module')   .then(m => m.MiscellaneousModule),    },
    ]
  },    
  
  { path: '**', redirectTo: 'loads'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
