import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
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
