import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './view/homepage/homepage.component';
import {EventListComponent} from './view/events/event-list/event-list.component';
import {EventShowComponent} from './view/events/event-show/event-show.component';
import {HeaderComponent} from './view/include/header/header.component';
import {FooterComponent} from './view/include/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PerformerListComponent} from './view/performers/performer-list/performer-list.component';
import {PerformerShowComponent} from './view/performers/performer-show/performer-show.component';
import {LoginComponent} from './view/auth/login/login.component';
import {RegisterComponent} from './view/auth/register/register.component';
import {ErrorComponent} from './view/error/error/error.component';
import {LogoutComponent} from './view/auth/logout/logout.component';
import {AccountDashboardComponent} from './view/auth/account/dashboard/account-dashboard.component';
import {VenueListComponent} from './view/venues/venue-list/venue-list.component';
import {VenueShowComponent} from './view/venues/venue-show/venue-show.component';
import {FormsModule} from "@angular/forms";
import {PaginationComponent} from './view/include/pagination/pagination.component';
import {BreadCrumbsComponent} from './view/include/bread-crumbs/bread-crumbs.component';
import {UsersListComponent} from './view/auth/admin/users/users-list/users-list.component';
import {AddUserComponent} from './view/auth/admin/users/add-user/add-user.component';
import {EditUserComponent} from './view/auth/admin/users/edit-user/edit-user.component';
import {AccountSidebarComponent} from './view/auth/account/include/sidebar/account-sidebar.component';
import {EditAccountComponent} from './view/auth/account/edit/edit-account.component';
import {AccountComponent} from './view/auth/account/account/account.component';
import {ToastComponent} from './view/include/toast/toast.component';
import {DefaultHeadersInterceptor} from "./services/default-headers.interceptor";

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
    AccountDashboardComponent,
    VenueListComponent,
    VenueShowComponent,
    PaginationComponent,
    BreadCrumbsComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    AccountSidebarComponent,
    EditAccountComponent,
    AccountComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: DefaultHeadersInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
