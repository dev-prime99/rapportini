import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../../service/activity.service';
import { mapDataFromModel } from '../../functions/functions';
import { AnagraficaService } from '../../../service/anagrafica.service';
import { AnagraficaDto } from '../../anagrafica-dto';
import { TypeActivityService } from '../../../service/type-activity.service';
import { TypeActivityDto } from '../../type_activity-dto';
import { ProjectService } from '../../../service/project.service';
import { ProjectDto } from '../../project-dto';
import { UserService } from '../../../service/user.service';
import { UserDto } from '../../user-dto';
import { TecniciService } from '../../../service/tecnici.service';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {

  public currentUser: UserDto = null;

  activityForm: FormGroup;
  identity: string;
  rows: AnagraficaDto[];
  cars: TypeActivityDto[];
  eyes: ProjectDto[];
  cats: UserDto[];

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private actService:ActivityService,
    private anaService: AnagraficaService,
    private typeAcService: TypeActivityService,
    private prjService: ProjectService,
    private tecniciService: TecniciService,
    private userService: UserService) {
    this.activityForm = formBuilder.group({
      identity: [null],
      customer: [null,Validators.required],
      activity: [null,Validators.required],
      project: [null, Validators.required],
      date: [null,Validators.required],
      hours: [null,Validators.required],
      user: [null],
      desc: [null, Validators.required]
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
    this.tecniciService.getTecniciList().subscribe(x=>{
      this.cats = x;
    });
    
    this.userService.curerrentUserEmitter$.subscribe(user=>{
      this.currentUser = user;
      this.activityForm.get("user").setValue(user);
      this.activityForm.get("user").disable();
    });
    this.userService.refreshEmit();
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

export class DatepickerStartViewExample {
  startDate = new Date(1990, 0, 1);
}