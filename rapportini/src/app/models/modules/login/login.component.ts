import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';
import { AuthService } from '../../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  formValue: FormGroup;
  
  constructor(private authService:AuthService, private router:Router,private formBuilder: FormBuilder) {
    this.formValue = formBuilder.group({
      username: [null],
      password: [null]
    });
  }
  
  ngOnInit(): void {

  }
  
  login(){
    alert("username: " + this.formValue.value.username + " /  password: " + this.formValue.value.password)
   
    this.authService.login(this.formValue.value.username,this.formValue.value.password)
      .subscribe(async response => {
      console.log("Response",response)
      if(response) {
        this.router.navigateByUrl('activity-list')
      }
    }, async error =>{
      console.log("errore",error)
    });


    // this.userService.apiUsersLoginPost$Json(data).subscribe(async response => {
    //   console.log("apiUsersLoginPost",response);
    //   if (r.access_token) {
    //       console.log("TOkenOk",r.access_token);
    //       this.authService.setToken(r.access_token,r.refresh_token);
    //       this.loadCompanyInfo();
    //       if (this.returnUrl) {
    //         console.log("navigate",this.returnUrl)
    //         await this.router.navigate([this.returnUrl], {replaceUrl: true});
    //       } else {
    //         console.log("navigate '/dashboard'")
    //         await this.router.navigate(['/dashboard'], {replaceUrl: true});
    //       }
        
    //   } else if (this.error) {
    //     this.messageService.SwalTypeError('Ops', 'Qualcosa Ã¨ andato storto. Controlla di aver inserito i dati correttamente.');
    //   }
    // },error=>{
    //   this.messageService.SwalTypeError('Ops', 'Qualcosa Ã¨ andato storto. Controlla di aver inserito i dati correttamente.');
  }
  
  
  
}

