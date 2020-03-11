import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { mapDataFromModel } from 'src/app/models/functions/functions';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styles: ['div:first-child{ padding: 0 10px }']
})
export class ActivityComponent implements OnInit {

  activityForm: FormGroup;
  identity: string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, private router:Router, private actService:ActivityService) {
    this.activityForm = formBuilder.group({
      identity: [null],
      customer: [null,Validators.required],
      activity: [null,Validators.required],
      date: [null,Validators.required],
      hours: [null,Validators.required],
      desc: [null]
    });
   }

  ngOnInit(): void {
    this.identity = this.route.snapshot.params.identity;
    if(this.identity){
      this.actService.getActivity(this.identity).subscribe(data =>{
        if(data){
          let model = this.activityForm.getRawValue();
          let m = mapDataFromModel(data,model);
          this.activityForm.setValue(m);
        }
      })
    }
  }

  toIndietro(){
    this.router.navigateByUrl('activity-list');
  }

  toSave(){
    var data = this.activityForm.getRawValue();
    this.actService.addActivity(data);
    // alert( JSON.stringify( data));
    this.router.navigateByUrl('activity-list');
  }

}
