import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScoreOverviewComponent } from './scores/overview/overview.component';
import { ScoreDetailComponent } from './scores/detail/detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'score/:id', component: ScoreDetailComponent },
  { path: 'scores', component: ScoreOverviewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class RoutingModule { }
