import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ScoreOverviewComponent } from './scores/overview/overview.component';
import { ScoreDetailComponent } from './scores/detail/detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent },
    { path: 'score/:id', component: ScoreDetailComponent },
    { path: 'scores', component: ScoreOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class RoutingModule { }
