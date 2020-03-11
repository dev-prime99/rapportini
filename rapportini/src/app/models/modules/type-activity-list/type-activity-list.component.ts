import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TypeActivityService } from 'src/app/service/type-activity.service';
import { TypeActivityDto } from 'src/app/models/type_activity-dto';

@Component({
  selector: 'app-type-activity-list',
  templateUrl: './type-activity-list.component.html',
  styles: []
})
export class TypeActivityListComponent implements OnInit {

  rows:TypeActivityDto[];

  constructor(private route:Router, private typeAcService:TypeActivityService) { }

  ngOnInit(): void {
    this.typeAcService.getTypeList().subscribe(x=>{
      this.rows = x;
    });
  }

  resetActivity(){
    this.typeAcService.resetList();
    this.typeAcService.getTypeList().subscribe(x=>{
      this.rows = x;
    });
  }

  newTypeActivity(){
    this.route.navigateByUrl('type-activity')
  };

}
