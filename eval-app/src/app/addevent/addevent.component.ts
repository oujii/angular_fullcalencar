import { Component, OnInit } from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../users.service';

import { IUsers } from '../iusers';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css'],
  providers: [AddeventComponent]
})
export class AddeventComponent implements OnInit {

  time: NgbTimeStruct = {hour: 13, minute: 30, second:0};
  users: IUsers[] = [];


  constructor(config: NgbTimepickerConfig, private usersService: UsersService) {
    // customize default values of ratings used by this component tree
    config.seconds = false;
    config.spinners = false;
  }


  ngOnInit() {

    this.users = this.usersService.getUsers();
    
  }
  

}


