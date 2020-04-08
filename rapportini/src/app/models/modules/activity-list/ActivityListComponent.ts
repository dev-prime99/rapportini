
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActivityService } from '../../../service/activity.service';
import { ActivityDto } from '../../activity-dto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserDto } from '../../../api/models';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  rows: ActivityDto[];
  
  displayedColumns: string[] = ['identity', 'customer', 'activity',
  'project', 'date', 'hours', 'user', 'desc', 'bt1', 'bt2'];
  dataSource = null;
  user:UserDto= null;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort
  
  constructor(private route: Router, private actService: ActivityService,
    public dialog: MatDialog, 
    private authService: AuthService) {

   }
  
  ngOnInit(): void {
    this.actService.getActivityList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialogDel(ana: ActivityDto) {
    const dialogRef = this.dialog.open(ActivityListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.actService.delActivity(ana);
        this.dataSource = this.actService.getActivityList();
      }
    });
  }

  openDialogRes() {
    const dialogRef = this.dialog.open(ActivityListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.actService.resetList();
        this.dataSource = this.actService.getActivityList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newActivity() {
    this.route.navigateByUrl('activity');
  }

  editActivity(ana: ActivityDto) {
    // console.log(ana);
    this.route.navigateByUrl('activity/' + ana.identity);
  }

}

@Component({
  selector: 'activity-list-dialog',
  templateUrl: '../_dialog/delete-reset-dialog.html',
})
export class ActivityListDialog {

}