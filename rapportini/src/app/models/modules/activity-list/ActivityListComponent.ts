
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActivityService } from '../../../service/activity.service';
import { ActivityDto } from '../../activity-dto';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  rows: ActivityDto[];

  displayedColumns: string[] = ['identity', 'customer', 'activity', 'project', 'date', 'hours', 'desc', 'bt1', 'bt2'];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private route: Router, private actService: ActivityService) { }

  ngOnInit(): void {
    this.actService.getActivityList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  resetActivity() {
    this.actService.resetList();
    this.dataSource = this.actService.getActivityList();
  }

  newActivity() {
    this.route.navigateByUrl('activity');
  }

  editActivity(ana: ActivityDto) {
    // console.log(ana);
    this.route.navigateByUrl('activity/' + ana.identity);
  }

  deleteActivity(ana: ActivityDto) {
    this.actService.delActivity(ana);
    this.dataSource = this.actService.getActivityList();
  }

}