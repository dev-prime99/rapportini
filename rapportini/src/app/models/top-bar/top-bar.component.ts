import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UserDto } from '../../api/models/user-dto';

@Component({
  selector: 'app-top-bar',
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {

  public currentUser: UserDto = null;
  
  constructor(private route:Router, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.getLogged().subscribe(user=>{
      this.currentUser = user;
    })
    this.authService.refreshEmit();
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

  toUser(){
    this.route.navigateByUrl('user-list')
  }

  toProject(){
    this.route.navigateByUrl('project-list')
  }
  
  toActivity(){
    this.route.navigateByUrl('type-activity-list')
  }

  logout(){
    this.authService.logout().subscribe(async response => {
      console.log("Response",response)
      if(response) {
        this.route.navigateByUrl('login')
      }
    }, async error =>{
      console.log("errore",error)
    });
  }

}
