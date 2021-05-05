import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from '../main/main.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AddeventComponent } from '../addevent/addevent.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'addevent', component: AddeventComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
