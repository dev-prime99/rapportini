import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first  } from 'rxjs/operators'
import { ActivityDto } from '../models/activity-dto';
import { updateData } from '../models/functions/functions';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activityList: ActivityDto[] = [];

  constructor() {
    let strList =  localStorage.getItem("activitys");
    let list = [];
    if(strList){
      list = JSON.parse(strList);
      this.activityList = list;
    }
  }

  resetList(){
    let list = [];
    localStorage.setItem("activitys",JSON.stringify(this.activityList));
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
    // console.log(this.activityList[0]["project"]);
    return lista;
    
  }

  canDelPrj(identity:string){
    let i =0;
    while(this.activityList[i])
    {
      if(this.activityList[i].project.identity==identity) return false
      i++;
    }
    return true;
  }

  canDelAna(identity:string){
    let i =0;
    while(this.activityList[i])
    {
      if(this.activityList[i].customer.identity==identity) return false
      i++;
    }
    return true;
  }

  canDelType(identity:string){
    let i =0;
    while(this.activityList[i])
    {
      if(this.activityList[i].activity.identity==identity) return false
      i++;
    }
    return true;
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
    localStorage.setItem("activitys",JSON.stringify(this.activityList));
  }

  updateActivity(ana:ActivityDto){
    var i = 0;
    while(this.activityList[i]){
      if(this.activityList[i].identity==ana.identity){
        updateData(this.activityList[i],ana); 
      }
      i++;
    }
    localStorage.setItem("activitys",JSON.stringify(this.activityList));
  }

  delActivity(ana:ActivityDto){
    var i = 0;
    var found = false;
    while(this.activityList[i]){
      if(this.activityList[i].identity==ana.identity){
        found = true;
        break;
      }
      i++;
    }
    if(found){
    this.activityList.splice(i,1); 
    localStorage.setItem("activitys",JSON.stringify(this.activityList));
    }
    
  }

}
