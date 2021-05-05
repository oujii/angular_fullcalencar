import { Injectable } from '@angular/core';
import { IUsers } from './iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: IUsers[] = [
    {
      id:100,
      group:1,
      name: "Augustina Boos",
      color:'#D95350'
    },
    {
      id:101,
      group:2,
      name: "Sven Korp",
      color: '#5D9CD4'
    },
    {
      id:102,
      group:1,
      name: "Zoria Müller",
      color: '#78C36B'
    },
    {
      id:103,
      group:3,
      name: "Sofia Sutterstrand",
      color: '#9D67AB'
    }
  ]

  constructor() { }

  getUsers():IUsers[] {
    return this.users;
  }

}
