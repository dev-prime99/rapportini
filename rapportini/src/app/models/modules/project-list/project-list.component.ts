
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProjectService } from '../../../service/project.service';
import { ActivityService } from '../../../service/activity.service';
import { ProjectDto } from '../../project-dto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(private route:Router, private prjService:ProjectService, private actService: ActivityService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.prjService.getProjectList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log(this.actService["activityList"][0]["project"]);
    
  }

  openDialogDel(ana: ProjectDto) {

    let can = this.prjService.canDelPrj(ana.identity);

    if(can){
      const dialogRef = this.dialog.open(ProjectListDialog);
      
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
        if (result){
          // console.log("funziona");        
          this.prjService.delProject(ana);
          this.dataSource = this.prjService.getProjectList();
        }
      });
    }
    else{
      alert("nn");
    }


  }

  openDialogRes() {
    const dialogRef = this.dialog.open(ProjectListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.prjService.resetList();
        this.dataSource = this.prjService.getProjectList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newProject(){
    this.route.navigateByUrl('project')
  }

  editProject(ana:ProjectDto){
    // console.log(ana);
    this.route.navigateByUrl('project/'+ana.identity);
  }

}

@Component({
  selector: 'project-list-dialog',
  templateUrl: '../_dialog/delete-reset-dialog.html',
})
export class ProjectListDialog {

}