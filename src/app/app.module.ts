import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { EventListComponent } from './view/events/event-list/event-list.component';
import { EventShowComponent } from './view/events/event-show/event-show.component';
import { HeaderComponent } from './view/include/header/header.component';
import { FooterComponent } from './view/include/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { PerformerListComponent } from './view/performers/performer-list/performer-list.component';
import { PerformerShowComponent } from './view/performers/performer-show/performer-show.component';
import { LoginComponent } from './view/auth/login/login.component';
import { RegisterComponent } from './view/auth/register/register.component';
import { ErrorComponent } from './view/error/error/error.component';
import { LogoutComponent } from './view/auth/logout/logout.component';
import { DashboardComponent } from './view/auth/account/dashboard/dashboard.component';
import { VenueListComponent } from './view/venues/venue-list/venue-list.component';
import { VenueShowComponent } from './view/venues/venue-show/venue-show.component';
import {FormsModule} from "@angular/forms";
import { PaginationComponent } from './view/include/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventListComponent,
    EventShowComponent,
    HeaderComponent,
    FooterComponent,
    PerformerListComponent,
    PerformerShowComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    LogoutComponent,
    DashboardComponent,
    VenueListComponent,
    VenueShowComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
