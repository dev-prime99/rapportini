import { Injectable } from "@angular/core";
import { UserService } from "../api/services";
import { tap, map, catchError } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
      private tocken:string = null;
      private refreshTocken : string = null;

      constructor(private userService:UserService){
        let strAuth =  localStorage.getItem("auth");
        let auth = {tocken:null,refreshTocken:null};
        if(strAuth){
          auth = JSON.parse(strAuth);
          this.tocken = auth.tocken;
          this.refreshTocken = auth.refreshTocken;
        }
      }

      login(username:string,password:string):Observable<boolean>{
        const postParams = new URLSearchParams();

        postParams.append('username', username);
        postParams.append('password', password);
        postParams.append('grant_type', 'password');
        const data = postParams.toString();
        
        return this.userService.apiUsersLoginPost$Json(data).pipe(
            tap(x=>{
                console.log("login->",x);
                let r = <any>data;
                this.tocken = r.access_token;
                this.refreshTocken = r.refresh_token;
                localStorage.setItem("auth",
                JSON.stringify({
                    tocken:this.tocken,
                    refreshTocken:this.refreshTocken
                }));                
            }),
            map(x=> { 
                if(x ) return true;
                return false;
            }),
            tap(x=>{
                console.log("Transorm->",x)
            }),
            catchError(err=>{
                console.log("err",err);
                return of(false);
            })
        );
      }

      

  }