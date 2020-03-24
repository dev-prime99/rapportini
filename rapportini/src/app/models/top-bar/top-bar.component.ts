import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {

  constructor(private route:Router, private userService: UserService) { }

  ngOnInit(): void {
    
  }
  
  toHome(){
    this.route.navigateByUrl('')
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
