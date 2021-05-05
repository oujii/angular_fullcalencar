import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AddeventComponent } from './addevent/addevent.component';
import { TooltipComponent } from './tooltip/tooltip.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScheduleComponent,
    NavMenuComponent,
    AddeventComponent,
    TooltipComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
