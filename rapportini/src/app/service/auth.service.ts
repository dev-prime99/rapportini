import { Injectable } from "@angular/core";
import { UserService } from "../api/services";
import { tap, map, catchError, switchMap } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { of, Subject } from "rxjs";
import { UserDto } from "../api/models";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    private tocken:string = null;
    private refreshTocken : string = null;
    private currentUser = null;

    public curerrentUserEmitter$ = new Subject<UserDto>()

    getCurrentUser(){
    return this.currentUser;
    }

    refreshEmit(){
    this.curerrentUserEmitter$.next(this.currentUser);
    }

    constructor(private userService:UserService){
    let strAuth =  localStorage.getItem("auth.token");
    let auth = {tocken:null,refreshTocken:null};
    if(strAuth){
        auth = JSON.parse(strAuth);
        this.tocken = auth.tocken;
        this.refreshTocken = auth.refreshTocken;
    }

    let user:UserDto = null;
    let strUser =  localStorage.getItem("auth.user");
    if(strUser){
        user = JSON.parse(strUser);
        this.currentUser = user;
        this.refreshEmit();
    } 
    }

    login(username:string,password:string):Observable<any>{
    const postParams = new URLSearchParams();

    postParams.append('username', username);
    postParams.append('password', password);
    postParams.append('grant_type', 'password');
    const data = postParams.toString();
    
    return this.userService.apiUsersLoginPost$Json(data).pipe(
        tap(x=>{
            console.log("login->",x);
            let r = <any>x;
            this.tocken = r.access_token;
            this.refreshTocken = r.refresh_token;
            console.log(r);
            localStorage.setItem("auth.token",
            JSON.stringify({
                tocken:this.tocken,
                refreshTocken:this.refreshTocken
            }));                
        }),
        switchMap(_=>this.getLogged()),
        tap(x=>{
            console.log("User in login->",x);   
            this.refreshEmit();         
        }),
        catchError(err=>{
            console.log("err",err);
            return of(null);
        })
    );
    }

    getLogged():Observable<any>{
        return this.userService.apiUsersLoggedGet$Json().pipe(
        tap(x=>{
            console.log("logged ->", x);
        }),
        map(x=>x.user),
        tap(x=>{
            console.log("logged mapped ->", x);
            this.currentUser = x
            localStorage.setItem("auth.user", JSON.stringify({
                username: x
            }));
        }),
        catchError(err=>{
            console.log("err",err);
            return of(null);
        })
        )
    }

    isLogged(){
        if(this.tocken) return true;
        return false;
    }

    getToken(){
        return this.tocken;
    }

    logout():Observable<boolean>{
        return this.userService.apiUsersLogoutPost$Json()
        .pipe(
            tap(x=>{
                this.tocken = null;
                this.refreshTocken = null;
                localStorage.setItem("auth.token",
                JSON.stringify({
                    tocken:this.tocken,
                    refreshTocken:this.refreshTocken
                }));
                this.currentUser = null
                localStorage.setItem("auth.user", JSON.stringify({
                username: x
            }));
            }),
            map(x=> { 
                return true;
            }),
            catchError(err=>{
                console.log("err",err);
                return of(false);
            })
        );
    }

}