import { Injectable } from '@angular/core';
import { UserDto } from '../api/models/user-dto';
import { Observable, of } from 'rxjs';
import { first, catchError, map } from 'rxjs/operators';
import { updateData } from '../models/functions/functions';
import { UserService } from '../api/services';
import { RegisterDto } from '../api/models';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  
  userList: UserDto[] = [];

  constructor(private userService:UserService) {
    
  }
    

  getUser(identity:string):Observable<UserDto>{
    var lista  = new Observable<UserDto>( obs =>{
      obs.error("Metodo non implementato");
      obs.complete;
    });

    return lista.pipe(
      first()
    );
    
  }

  getUserList():Observable<UserDto[]>{
    return this.userService.apiUsersGet$Json();
  }

  addUser(ana:RegisterDto):Observable<UserDto>{    
    return this.userService.apiUsersRegisterPost$Json$Json({body:ana}).pipe(
      map(data=>{
        console.log(data);
        
        if(data.ok){
          return data.result;
        }
        console.log("Errore",data.error);
        return null;
      }),
      catchError(err=>{
        console.log("err",err);
        return of(null);
      })
    );
    
  }

  updateUser(ana:UserDto):Observable<UserDto>{
    return new Observable<UserDto>( obs =>{
      obs.error("Metodo non implementato");
      obs.complete;
    });
  }

  delUser(ana:UserDto){
    return new Observable<UserDto>( obs =>{
      obs.error("Metodo non implementato");
      obs.complete;
    });    
  }
}
