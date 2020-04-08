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
    console.log(this.authService.isLogged());
  }
  
  login(){
    // alert("username: " + this.formValue.value.username + " /  password: " + this.formValue.value.password)
    

    this.authService.login(this.formValue.value.username,this.formValue.value.password)
      .subscribe(async response => {
      console.log("Response",response)
      if(response) {
        this.router.navigateByUrl('activity-list')
      }
    }, async error =>{
      console.log("errore",error)
    });


  } 
  
  
}

