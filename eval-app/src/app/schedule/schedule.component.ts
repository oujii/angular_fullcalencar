import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import  dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from '../events.service';
import { UsersService } from '../users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarComponent } from '@fullcalendar/angular';


import svLocale from '@fullcalendar/core/locales/sv';
import { IEvents } from '../ievents';
import { IUsers } from '../iusers';
import { ICombined } from '../icombined';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  @Output() crendered = new EventEmitter();

  locales: [svLocale]; //Sets the Locale to Swedish
  calendarPlugins = [dayGridPlugin]; //Loads the default calendar view

  @ViewChild('calendar', { static:true }) calendarComponent: FullCalendarComponent;



  events: IEvents[] = []; 
  users: IUsers[] = [];
  eventsDefault: any[] = []; 
  
  eventsFiltered: ICombined[] = []; 
  
  eventsApi: any[]; 
  calendarApi; 
  
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.eventsFiltered = this.performFilter(value);
    console.log(this.eventsFiltered);
    
  }
  
  
  constructor(private eventService: EventsService, private usersService: UsersService) { } 

  ngAfterViewInit()  {
    //Gets full access to calendar
    this.crendered.emit(this.calendarComponent); 
    this.calendarApi = this.calendarComponent.getApi();
    this.eventsApi = this.calendarApi.getEvents();
    this.calendarApi.progressiveEventRendering = true;
    }

  performFilter(filterBy: string): ICombined[] {
    return this.eventsDefault.filter((e: ICombined) => 
    e.id.toString() === filterBy);
  }
 
  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.users = this.usersService.getUsers();

      // Creates eventsDefault that reads from both users and events and creates a mashup 
     this.eventsDefault = this.events.map(event => {
      const user = this.users.find(user => user.id == parseInt(event.user));
      
      return {
      ...event,
      id: event.user,
      color: user.color,
      userName: user.name,
      groupId: user.group,
      className: '' // Used to add styling when hovering over groups
      };
      });
      
    
  };
 

 

  eventMouseEnter(enter) {

    // Mouseover to view the same groups
    let groupId = parseInt(enter.event.groupId);

    for(var x = 0; x < this.eventsApi.length; x++) {
      if(this.eventsApi[x].groupId == groupId) {
        
        this.eventsApi[x].setProp("classNames", "selected");
        
    }
  }
    
  }

  eventMouseLeave(leave) {
    
    // De-set "selected" class
    for(var y = 0; y < this.eventsApi.length; y++) {
      this.eventsApi[y].setProp("classNames", " ");
    }
    
  }

  


  eventRendered(info) {

    //Tooltip here
      
  }

}