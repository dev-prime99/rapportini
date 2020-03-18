
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProjectService } from '../../../service/project.service';
import { ProjectDto } from '../../project-dto';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: ['table{width: 100%} th{width: calc(100% / 5)}']
})
export class ProjectListComponent implements OnInit {

  rows:ProjectDto[];

  displayedColumns: string[] = ['identity', 'code', 'desc', 'bt1', 'bt2'];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private route:Router, private prjService:ProjectService) { }

  ngOnInit(): void {
    this.prjService.getProjectList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  resetProject(){
    this.prjService.resetList();
    this.dataSource = this.prjService.getProjectList()
  }

  newProject(){
    this.route.navigateByUrl('project')
  }

  editProject(ana:ProjectDto){
    // console.log(ana);
    this.route.navigateByUrl('project/'+ana.identity);
  }

  deleteProject(ana:ProjectDto){
    this.prjService.delProject(ana);
    this.dataSource = this.prjService.getProjectList()
  }

}
