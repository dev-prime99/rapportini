import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { ActivityDto } from 'src/app/models/activity-dto';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  rows:ActivityDto[];

  constructor(private route:Router, private actService:ActivityService) { }

  ngOnInit(): void {
    this.actService.getActivityList().subscribe(x=>{
      this.rows = x;
    });
  }

  resetActivity(){
    this.actService.resetList();
    this.actService.getActivityList().subscribe(x=>{
      this.rows = x;
    });
  }

  newActivity(){
    this.route.navigateByUrl('activity')
  }
  
}