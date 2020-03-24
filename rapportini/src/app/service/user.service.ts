import { Injectable } from '@angular/core';
import { UserDto } from '../models/user-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: UserDto[] = [];

  constructor() {
    let list = [];
    let strList =  localStorage.getItem("user");
    if(strList){
      list = JSON.parse(strList);
      this.userList = list;
    }
  }

  setUser(user:UserDto){
    this.userList = [];
    this.userList.push(user);
    localStorage.setItem("user",JSON.stringify(this.userList));
  }
}
