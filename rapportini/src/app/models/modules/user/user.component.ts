import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtenteService } from '../../../service/utente.service';
import { mapDataFromModel } from '../../functions/functions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  utenteForm: FormGroup;
  identity: string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private uService: UtenteService) {
      this.utenteForm = formBuilder.group({
        identity: [null],
        username: [null,Validators.required],
        email: [null,Validators.required]
      });
    }

  ngOnInit(): void {
    this.identity = this.route.snapshot.params.identity;
    if(this.identity){

      let lista$ =  this.uService.getUser(this.identity);
      lista$.subscribe(data =>{
        if(data){
          let model = this.utenteForm.getRawValue();
          let m = mapDataFromModel(data,model);
          this.utenteForm.setValue(m);
        }
      })
    }
  }

  toIndietro(){
    this.router.navigateByUrl('user-list');
  }

  toSave(){
    var data = this.utenteForm.getRawValue();

    if(!this.identity){
      this.uService.addUser(data).subscribe(x=>{
        if(x){
          this.router.navigateByUrl('user-list')
        } else {
          alert("errore");
        }
      });
      
    // }else{
    //   var data = this.utenteForm.getRawValue();
    //   this.uService.updateUser(data);
    //   // console.log(data)
    }
    // alert( JSON.stringify( data));
    this.router.navigateByUrl('user-list');
  }

}
