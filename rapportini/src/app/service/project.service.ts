import { Injectable } from '@angular/core';
import { ProjectDto } from '../models/project-dto';
import { first  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { updateData } from '../models/functions/functions';
import { ActivityService } from './activity.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  prjList: ProjectDto[] = [];

  constructor(private rapService: ActivityService) {
    let strList =  localStorage.getItem("projects");
    let list = [];
    if(strList){
      list = JSON.parse(strList);
      this.prjList = list;
    }
  }

  resetList(){
    let list = [];
    localStorage.setItem("projects",JSON.stringify(this.prjList));
    this.prjList = list;
  }

  getProject(identity:string):Observable<ProjectDto>{
    var lista  = new Observable<ProjectDto>( obs =>{
      this.prjList.forEach(x=>{
        if(x.identity==identity) obs.next(x);
      })
      obs.complete;
    });

    return lista.pipe(
      first()
    );
    
  }

  getProjectList():Observable<ProjectDto[]>{
    var lista  = new Observable<ProjectDto[]>( obs =>{
      obs.next(this.prjList);
      obs.complete;
    });    
    
    return lista;
  }

  canDelPrj(identity:string):boolean{
    return this.rapService.canDelPrj(identity);
  }

  addProject(ana:ProjectDto){
  
    if(!this.prjList) this.prjList=[];
    let ultimo=1;
    if(this.prjList.length>0){
      let last = this.prjList[this.prjList.length-1];
      ultimo = (<any>last.identity * 1.0)+1;
    }

    ana.identity = ultimo +"";     
      
    this.prjList.push(ana);
    localStorage.setItem("projects",JSON.stringify(this.prjList));
  }

  updateProject(ana:ProjectDto){
    var i = 0;
    while(this.prjList[i]){
      if(this.prjList[i].identity==ana.identity){
        updateData(this.prjList[i],ana);
      }
      i++;
    }
    localStorage.setItem("projects",JSON.stringify(this.prjList));
  }

  delProject(ana:ProjectDto){
    var i = 0;
    var found = false;
    while(this.prjList[i]){
      if(this.prjList[i].identity==ana.identity){
        found = true;
        break;
      }
      i++;
    }
    if(found){
    this.prjList.splice(i,1); 
    localStorage.setItem("projects",JSON.stringify(this.prjList));
    }
    
  }

}

