import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AnagraficaService } from 'src/app/service/anagrafica.service';
import { mapDataFromModel } from 'src/app/models/functions/functions';

// ``

@Component({
  selector: 'app-anagrafica-handler',
  templateUrl: './anagrafica-handler.component.html',
  styles: ['div:first-child{ padding-left: 10px; }']
})
export class AnagraficaHandlerComponent implements OnInit {

  anagraficaForm: FormGroup;
  identity: string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private anaService:AnagraficaService) {
    this.anagraficaForm = formBuilder.group({
      identity: [null],
      name: [null,Validators.required],
      type: [null,Validators.required],
      city: [null]
    });
  }

  ngOnInit(): void { 
    this.identity = this.route.snapshot.params.identity;
    if(this.identity){
      this.anaService.getAnagrafica(this.identity).subscribe(data =>{
        if(data){
          let model = this.anagraficaForm.getRawValue();
          let m = mapDataFromModel(data,model);
          this.anagraficaForm.setValue(m);
        }
      })
    }
  }

  toIndietro(){
    this.router.navigateByUrl('anagrafica-list');
  }

  toAvanti(){
    var data = this.anagraficaForm.getRawValue();
    this.anaService.addAnagrafica(data);
    //alert( JSON.stringify( data));
    this.router.navigateByUrl('anagrafica-list')
  }
}
