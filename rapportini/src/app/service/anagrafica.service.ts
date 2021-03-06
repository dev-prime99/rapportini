import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first  } from 'rxjs/operators'
import { AnagraficaDto } from '../models/anagrafica-dto';
import { updateData } from '../models/functions/functions';
import { ActivityService } from './activity.service';


@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {

  anaList: AnagraficaDto[] = [];

  constructor(private rapService: ActivityService) {
    let strList =  localStorage.getItem("anagraficas");
    let list = [];
    if(strList){
      list = JSON.parse(strList);
      this.anaList = list;
    }
  }

  resetList(){
    let list = [];
    localStorage.setItem("anagraficas",JSON.stringify(this.anaList));
    this.anaList = list;
  }

  getAnagrafica(identity:string):Observable<AnagraficaDto>{
    var lista  = new Observable<AnagraficaDto>( obs =>{
      this.anaList.forEach(x=>{
        if(x.identity==identity) obs.next(x);
      })
      obs.complete;
    });

    return lista.pipe(
      first()
    );
    
  }

  getAnagraficaList():Observable<AnagraficaDto[]>{
    var lista  = new Observable<AnagraficaDto[]>( obs =>{
      obs.next(this.anaList);
      obs.complete;
    });
    return lista;
  }

  canDelAna(identity:string):boolean{
    return this.rapService.canDelAna(identity);
  }

  addAnagrafica(ana:AnagraficaDto){
  
    if(!this.anaList) this.anaList=[];
    let ultimo=1;
    if(this.anaList.length>0){
      let last = this.anaList[this.anaList.length-1];
      ultimo = (<any>last.identity * 1.0)+1;
    }

    ana.identity = ultimo +"";     
      
    this.anaList.push(ana);
    localStorage.setItem("anagraficas",JSON.stringify(this.anaList));
  }

  updateAnagrafica(ana:AnagraficaDto){
    var i = 0;
    while(this.anaList[i]){
      if(this.anaList[i].identity==ana.identity){
        updateData(this.anaList[i],ana);
      }
      i++;
    }
    localStorage.setItem("anagraficas",JSON.stringify(this.anaList));
    
  }

  delAnagrafica(ana:AnagraficaDto){
    var i = 0;
    var found = false;
    while(this.anaList[i]){
      if(this.anaList[i].identity==ana.identity){
        found = true;
        break;
      }
      i++;
    }
    if(found){
    this.anaList.splice(i,1); 
    localStorage.setItem("anagraficas",JSON.stringify(this.anaList));
    }
    
  }


}