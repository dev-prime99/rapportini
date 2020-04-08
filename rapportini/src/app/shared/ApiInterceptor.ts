import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private router: Router, private authBase:AuthService){}
    
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.loaderService.show();
    var token = this.authBase.getToken();
    console.log(token);
    
    if(token){
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
 
    return next.handle(req).pipe(
      tap(x => x, err => {
        console.error(`Error performing request, status code = ${err.status}`);
        if (err.status === 401) {
            this.router.navigateByUrl('/login');
          }
      }),
    //   finalize(() => this.loaderService.hide())
    );
  }
}