import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeActivityService } from '../../../service/type-activity.service';
import { mapDataFromModel } from '../../functions/functions';

@Component({
  selector: 'app-type-activity',
  templateUrl: './type-activity.component.html',
  styles: ['div:first-child{ padding: 0 10px }']
})
export class TypeActivityComponent implements OnInit {

  typeForm: FormGroup;
  identity: string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private typeAcService:TypeActivityService) {
    this.typeForm = formBuilder.group({
      identity: [null],
      code: [null,Validators.required],
      desc: [null,Validators.required]
    });

  }

  ngOnInit(): void {
    this.identity = this.route.snapshot.params.identity;
    if(this.identity){
      this.typeAcService.getType(this.identity).subscribe(data =>{
        if(data){
          let model = this.typeForm.getRawValue();
          let m = mapDataFromModel(data,model);
          this.typeForm.setValue(m);
        }
      })
    }
  }

  toIndietro(){
    this.router.navigateByUrl('type-activity-list');
  }

  toAvanti(){
    var data = this.typeForm.getRawValue();

    if(!this.identity){
      this.typeAcService.addType(data);
      this.router.navigateByUrl('project-list')
    }else{
      var data = this.typeForm.getRawValue();
      this.typeAcService.updateTypeAc(data);
      // console.log(data)
    }
    // alert( JSON.stringify( data));
    this.router.navigateByUrl('project-list');
  }

}
