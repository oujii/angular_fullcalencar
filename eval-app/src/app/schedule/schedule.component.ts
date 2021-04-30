import { Component, OnInit } from '@angular/core';
import  dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from '../events.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  private events: any[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  eventRendered(info) {
    info.el.addEventListener('mouseover', (evt) => {
      evt.target.style.fontWeight='bold';
    });
    info.el.addEventListener('mouseout', (evt) => {
      evt.target.style.fontWeight='';
    });
  }
}
