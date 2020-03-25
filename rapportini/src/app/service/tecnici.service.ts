import { Injectable } from '@angular/core';
import { TecniciDto } from '../models/tecnici-dto';
import { first  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { updateData } from '../models/functions/functions';
import { UserService } from './user.service';
import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class TecniciService {

  tecList: TecniciDto[] = [];

  constructor(private userService:UserService) {
    let strList =  localStorage.getItem("tecnici");
    let list = [];
    if(strList){
      list = JSON.parse(strList);
      this.tecList = list;
    }
  }

  resetList(){
    let list = [];
    localStorage.setItem("projects",JSON.stringify(this.tecList));
    this.tecList = list;
  }

  getTecnici(identity:string):Observable<TecniciDto>{
    var lista  = new Observable<TecniciDto>( obs =>{
      this.tecList.forEach(x=>{
        if(x.identity==identity) obs.next(x);
      })
      obs.complete;
    });

    return lista.pipe(
      first()
    );
    
  }

  getTecniciList():Observable<TecniciDto[]>{
    var lista  = new Observable<TecniciDto[]>( obs =>{
      obs.next(this.tecList);
      obs.complete;
    });    

    return lista;    
  }

  addTecnici(ana:TecniciDto){
  
    if(!this.tecList) this.tecList=[];
    let ultimo=1;
    if(this.tecList.length>0){
      let last = this.tecList[this.tecList.length-1];
      ultimo = (<any>last.identity * 1.0)+1;
    }

    ana.identity = ultimo +"";     
      
    this.tecList.push(ana);
    localStorage.setItem("tecnici",JSON.stringify(this.tecList));
  }

  updateTecnici(ana:TecniciDto){
    var i = 0;
    while(this.tecList[i]){
      if(this.tecList[i].identity==ana.identity){
        updateData(this.tecList[i],ana);
      }
      i++;
    }
    localStorage.setItem("tecnici",JSON.stringify(this.tecList));
  }

  delTecnici(ana:TecniciDto){
    var i = 0;
    var found = false;
    while(this.tecList[i]){
      if(this.tecList[i].identity==ana.identity){
        found = true;
        break;
      }
      i++;
    }
    if(found){
    this.tecList.splice(i,1); 
    localStorage.setItem("tecnici",JSON.stringify(this.tecList));
    }
    
  }

  selectUser(identity:string){
    var i = 0;
    var found = false;
    let user = null;
    while(this.tecList[i]){
      if(this.tecList[i].identity==identity){
        found = true;
        user = this.tecList[i];
        break;
      }
      i++;
    }
    
    if(user){
      this.userService.setUser(user);
    }
    
  }

}
