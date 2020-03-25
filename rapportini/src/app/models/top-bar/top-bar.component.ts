import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UserDto } from '../user-dto';

@Component({
  selector: 'app-top-bar',
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {

  public currentUser: UserDto = null;
  
  constructor(private route:Router, private userService: UserService) { }
  
  ngOnInit(): void {
    
    this.userService.curerrentUserEmitter$.subscribe(user=>{
      this.currentUser = user;
    });
    this.userService.refreshEmit();
  }
  

  toHome(){
    this.route.navigateByUrl('')
  }

  toCostumers(){
    this.route.navigateByUrl('anagrafica-list')
  }

  toTecnici(){
    this.route.navigateByUrl('tecnici-list')
  }

  toProject(){
    this.route.navigateByUrl('project-list')
  }
  
  toActivity(){
    this.route.navigateByUrl('type-activity-list')
  }

}
