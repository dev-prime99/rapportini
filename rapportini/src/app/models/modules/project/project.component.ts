import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { mapDataFromModel } from 'src/app/models/functions/functions';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: ['div:first-child{ padding-left: 10px; }']
})
export class ProjectComponent implements OnInit {

  formProject: FormGroup;
  identity: string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router,
    private prjService:ProjectService) {
    this.formProject = formBuilder.group({
      identity: [null],
      code: [null,Validators.required],
      desc: [null, Validators.required]
    });
  }

  ngOnInit(): void { 
    this.identity = this.route.snapshot.params.identity;
    if(this.identity){
      this.prjService.getProject(this.identity).subscribe(data =>{
        if(data){
          let model = this.formProject.getRawValue();
          let m = mapDataFromModel(data,model);
          this.formProject.setValue(m);
        }
      })
    }
  }

  toIndietro(){
    this.router.navigateByUrl('project-list');
  }

  toAvanti(){
    var data = this.formProject.getRawValue();

    if(!this.identity){
      this.prjService.addProject(data);
      this.router.navigateByUrl('project-list')
    }else{
      var data = this.formProject.getRawValue();
      this.prjService.updateProject(data);
      // console.log(data)
    }
    // alert( JSON.stringify( data));
    this.router.navigateByUrl('project-list');
  }

}