import { Injectable } from '@angular/core';
import { UserDto } from '../models/user-dto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public curerrentUserEmitter$ = new Subject<UserDto>()

  private currentUser: UserDto = null;

  constructor() {
    let user:UserDto = null;
    let strUser =  localStorage.getItem("user");
    if(strUser){
      user = JSON.parse(strUser);
      this.currentUser = user;
      this.refreshEmit();
    }       
  }

  getCurrentUser(){
    return this.currentUser;
  }

  refreshEmit(){
    this.curerrentUserEmitter$.next(this.currentUser);
  }

  setUser(user:UserDto){
    this.currentUser = user;
    this.refreshEmit();
    localStorage.setItem("user",JSON.stringify(user));
  }
}
