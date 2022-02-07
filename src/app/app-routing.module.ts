import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./view/homepage/homepage.component";
import {EventListComponent} from "./view/events/event-list/event-list.component";
import {EventShowComponent} from "./view/events/event-show/event-show.component";
import {PerformerListComponent} from "./view/performers/performer-list/performer-list.component";
import {PerformerShowComponent} from "./view/performers/performer-show/performer-show.component";
import {LoginComponent} from "./view/auth/login/login.component";
import {RegisterComponent} from "./view/auth/register/register.component";
import {ErrorComponent} from "./view/error/error/error.component";
import {LogoutComponent} from "./view/auth/logout/logout.component";
import {AccountDashboardComponent} from "./view/auth/account/dashboard/account-dashboard.component";
import {VenueListComponent} from "./view/venues/venue-list/venue-list.component";
import {VenueShowComponent} from "./view/venues/venue-show/venue-show.component";
import {AdminGuard} from "./guards/admin.guard";
import {UserGuard} from "./guards/user.guard";
import {UsersListComponent} from "./view/auth/admin/users/users-list/users-list.component";
import {AddUserComponent} from "./view/auth/admin/users/add-user/add-user.component";
import {EditUserComponent} from "./view/auth/admin/users/edit-user/edit-user.component";
import {EditAccountComponent} from "./view/auth/account/edit/edit-account.component";
import {AccountSidebarComponent} from "./view/auth/account/include/sidebar/account-sidebar.component";
import {AccountComponent} from "./view/auth/account/account/account.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},

  // Events
  {path: 'events', component: EventListComponent},
  {path: 'events/page/:pageId', component: EventListComponent},
  {path: 'events/:slug', component: EventShowComponent},

  // Venues
  {path: 'venues', component: VenueListComponent},
  {path: 'venues/page/:pageId', component: VenueListComponent},
  {path: 'venues/:slug', component: VenueShowComponent},

  // Performers
  {path: 'performers', component: PerformerListComponent},
  {path: 'performers/page/:pageId', component: PerformerListComponent},
  {path: 'performers/:slug', component: PerformerShowComponent},


  // Auth
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},


  // Account routes
  {
    path: 'account', component: AccountComponent, canActivate: [UserGuard],
    children: [
      {path: 'dashboard', component: AccountDashboardComponent},
      {path: 'edit', component: EditAccountComponent},
    ]
  },

  // Admin
  {
    path: 'admin', canActivate: [AdminGuard],
    children: [
      {
        path: 'users', component: UsersListComponent, children: [
          {path: 'add-user', component: AddUserComponent},
          {path: 'edit-user', component: EditUserComponent},
        ]
      },
    ]
  },


  // Errors and others
  {path: 'error/:code', component: ErrorComponent},
  {path: '404', component: ErrorComponent},

  {path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
