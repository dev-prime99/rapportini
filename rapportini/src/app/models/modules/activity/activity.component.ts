import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { AnagraficaService } from 'src/app/service/anagrafica.service';
import { mapDataFromModel } from 'src/app/models/functions/functions';
import { AnagraficaDto } from 'src/app/models/anagrafica-dto';
import { TypeActivityService } from 'src/app/service/type-activity.service';
import { TypeActivityDto } from 'src/app/models/type_activity-dto';
import { ProjectService } from 'src/app/service/project.service';
import { ProjectDto } from 'src/app/models/project-dto';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {

  activityForm: FormGroup;
  identity: string;
  rows: AnagraficaDto[];
  cars: TypeActivityDto[];
  eyes: ProjectDto[];

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private actService:ActivityService,
    private anaService: AnagraficaService,
    private typeAcService: TypeActivityService,
    private prjService: ProjectService) {
    this.activityForm = formBuilder.group({
      identity: [null],
      customer: [null,Validators.required],
      activity: [null,Validators.required],
      project: [null, Validators.required],
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
    };
    this.anaService.getAnagraficaList().subscribe(x=>{
      this.rows = x;
    });
    this.typeAcService.getTypeList().subscribe(x=>{
      this.cars = x;
    });
    this.prjService.getProjectList().subscribe(x=>{
      this.eyes = x;
    });
  }

  toIndietro(){
    this.router.navigateByUrl('activity-list');
  }

  toSave(){
    var data = this.activityForm.getRawValue();

    if(!this.identity){
      this.actService.addActivity(data);
      this.router.navigateByUrl('activity-list')
    }else{
      var data = this.activityForm.getRawValue();
      this.actService.updateActivity(data);
      // console.log(data)
    }
    // alert( JSON.stringify( data));
    this.router.navigateByUrl('activity-list');
  }

}
