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
import {DashboardComponent} from "./view/auth/account/dashboard/dashboard.component";
import {VenueListComponent} from "./view/venues/venue-list/venue-list.component";
import {VenueShowComponent} from "./view/venues/venue-show/venue-show.component";

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

  {path: 'dashboard', component: DashboardComponent},


  {path: '404', component: ErrorComponent},
  {path: '**', component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
