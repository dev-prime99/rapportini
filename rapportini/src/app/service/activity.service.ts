import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first  } from 'rxjs/operators'
import { ActivityDto } from 'src/app/models/activity-dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activityList: ActivityDto[] = [];

  constructor() {
    let strList =  localStorage.getItem("activity");
    let list = [];
    if(strList){
      list = JSON.parse(strList);
      this.activityList = list;
    }
  }

  resetList(){
    let list = [];
    localStorage.setItem("activity",JSON.stringify(this.activityList));
    this.activityList = list;
  }

  getActivity(identity:string):Observable<ActivityDto>{
    var lista  = new Observable<ActivityDto>( obs =>{
      this.activityList.forEach(x=>{
        if(x.identity==identity) obs.next(x);
      })
      obs.complete;
    });

    return lista.pipe(
      first()
    );
    
  }

  getActivityList():Observable<ActivityDto[]>{
    var lista  = new Observable<ActivityDto[]>( obs =>{
      obs.next(this.activityList);
      obs.complete;
    });
    return lista;
  }

  addActivity(ana:ActivityDto){
  
    if(!this.activityList) this.activityList=[];
    let ultimo=1;
    if(this.activityList.length>0){
      let last = this.activityList[this.activityList.length-1];
      ultimo = (<any>last.identity * 1.0)+1;
    }

    ana.identity = ultimo +"";     
      
    this.activityList.push(ana);
    localStorage.setItem("anagrafica",JSON.stringify(this.activityList));
  }
}
