import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountingRoutingModule } from './components/accounting/accounting-routing.module';
import { AuthModule } from './components/authentication/auth.module';
import { AuthInterceptor } from './components/authentication/services/interceptor/auth.interceptor';
import { CarriersModule } from './components/carriers/carriers.module';
import { CustomersModule } from './components/customers/customers.module';
import { DailyRatesModule } from './components/daily-rates/daily-rates.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoadsBoardModule } from './components/load-board/loads-board.module';
import { LoadsModule } from './components/loads/loads.module';
import { MiscellaneousModule } from './components/miscellaneous/miscellaneous.module';
import { NotesModule } from './components/notes/notes.module';
import { SettingsModule } from './components/settings/settings.module';
import { SharedComponentModule } from './components/shared/shared-component.module';
import { UsersModule } from './components/users/users.module';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [ 
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // AuthModule,
    // LoadsModule,
    // LoadsBoardModule,
    // CustomersModule,
    // CarriersModule,
    // UsersModule,
    // AccountingRoutingModule,
    // DailyRatesModule,
    // SettingsModule,
    // NotesModule,
    // MiscellaneousModule,
    SharedComponentModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
