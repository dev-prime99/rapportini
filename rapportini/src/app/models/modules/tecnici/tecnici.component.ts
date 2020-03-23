import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TecniciService } from '../../../service/tecnici.service';
import { mapDataFromModel } from '../../functions/functions';

@Component({
  selector: 'app-tecnici',
  templateUrl: './tecnici.component.html',
  styleUrls: ['./tecnici.component.css']
})

export class TecniciComponent implements OnInit {

  formTecnici: FormGroup;
  identity: string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private tecService: TecniciService) {
      this.formTecnici = formBuilder.group({
        identity: [null],
        name: [null, Validators.required],
        surname: [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.identity = this.route.snapshot.params.identity;
    if(this.identity){
      this.tecService.getTecnici(this.identity).subscribe(data =>{
        if(data){
          let model = this.formTecnici.getRawValue();
          let m = mapDataFromModel(data,model);
          this.formTecnici.setValue(m);
        }
      })
    }
  }

  toIndietro(){
    this.router.navigateByUrl('tecnici-list');
  }

  toAvanti(){
    var data = this.formTecnici.getRawValue();

    if(!this.identity){
      this.tecService.addTecnici(data);
      this.router.navigateByUrl('tecnici-list')
    }else{
      var data = this.formTecnici.getRawValue();
      this.tecService.updateTecnici(data);
      // console.log(data)
    }
    // alert( JSON.stringify( data));
    this.router.navigateByUrl('tecnici-list');
  }

}
