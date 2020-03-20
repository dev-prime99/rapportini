import { Injectable } from '@angular/core';
import { first  } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { TypeActivityDto } from '../models/type_activity-dto';
import { updateData } from '../models/functions/functions';

@Injectable({
  providedIn: 'root'
})
export class TypeActivityService {

  typeList: TypeActivityDto[] = [];

  constructor() {
    let strList =  localStorage.getItem("types");
    let list = [];
    if(strList){
      list = JSON.parse(strList);
      this.typeList = list;
    }
  }

  resetList(){
    let list = [];
    localStorage.setItem("types",JSON.stringify(this.typeList));
    this.typeList = list;
  }

  getType(identity:string):Observable<TypeActivityDto>{
    var lista  = new Observable<TypeActivityDto>( obs =>{
      this.typeList.forEach(x=>{
        if(x.identity==identity) obs.next(x);
      })
      obs.complete;
    });

    return lista.pipe(
      first()
    );
    
  }

  getTypeList():Observable<TypeActivityDto[]>{
    var lista  = new Observable<TypeActivityDto[]>( obs =>{
      obs.next(this.typeList);
      obs.complete;
    });
    return lista;
  }

  addType(ana:TypeActivityDto){
  
    if(!this.typeList) this.typeList=[];
    let ultimo=1;
    if(this.typeList.length>0){
      let last = this.typeList[this.typeList.length-1];
      ultimo = (<any>last.identity * 1.0)+1;
    }

    ana.identity = ultimo +"";     
      
    this.typeList.push(ana);
    localStorage.setItem("types",JSON.stringify(this.typeList));
  }

  updateTypeAc(ana:TypeActivityDto){
    var i = 0;
    while(this.typeList[i]){
      if(this.typeList[i].identity==ana.identity){
        updateData(this.typeList[i],ana);
      }
      i++;
    }
    localStorage.setItem("types",JSON.stringify(this.typeList));
  }

  delTypeAc(ana:TypeActivityDto){
    var i = 0;
    var found = false;
    while(this.typeList[i]){
      if(this.typeList[i].identity==ana.identity){
        found = true;
        break;
      }
      i++;
    }
    if(found){
    this.typeList.splice(i,1); 
    localStorage.setItem("types",JSON.stringify(this.typeList));
    }
    
  }

}
