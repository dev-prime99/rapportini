import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../../service/project.service';
import { ProjectDto } from '../../project-dto';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {

  rows:ProjectDto[];

  constructor(private route:Router, private prjService:ProjectService) { }

  ngOnInit(): void {
    this.prjService.getProjectList().subscribe(x=>{
      this.rows = x;
    });
  }

  resetProject(){
    this.prjService.resetList();
    this.prjService.getProjectList().subscribe(x=>{
      this.rows = x;
    });
  }

  newProject(){
    this.route.navigateByUrl('project')
  }

  editProject(ana:ProjectDto){
    // console.log(ana);
    this.route.navigateByUrl('project/'+ana.identity);
  }

  deleteProject(ana:ProjectDto){
    this.prjService.delProject(ana)
  }

}
