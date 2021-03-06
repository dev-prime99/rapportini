
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TypeActivityService } from '../../../service/type-activity.service';
import { TypeActivityDto } from '../../type_activity-dto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-type-activity-list',
  templateUrl: './type-activity-list.component.html',
  styles: ['table{width: 100%} th{width: calc(100% / 5)}']
})
export class TypeActivityListComponent implements OnInit {

  rows:TypeActivityDto[];

  displayedColumns: string[] = ['identity', 'code', 'desc', 'bt1', 'bt2'];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route:Router, private typeAcService:TypeActivityService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.typeAcService.getTypeList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
  }

  openDialogDel(ana: TypeActivityDto) {

    let can = this.typeAcService.canDelType(ana.identity);

    if(can){

      const dialogRef = this.dialog.open(TypeActivityListDialog);
      
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
        if (result){
          // console.log("funziona");        
          this.typeAcService.delTypeAc(ana);
          this.dataSource = this.typeAcService.getTypeList();
        }
      });
    }
    else{
      const dialogRef = this.dialog.open(TypeActivityCheckDialog);
      dialogRef.afterClosed();
    }
  }

  openDialogRes() {
    const dialogRef = this.dialog.open(TypeActivityListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.typeAcService.resetList();
        this.dataSource = this.typeAcService.getTypeList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newTypeActivity(){
    this.route.navigateByUrl('type-activity')
  };

  editType(ana:TypeActivityDto){
    // console.log(ana);
    this.route.navigateByUrl('type-activity/'+ana.identity);
  }

}

@Component({
  selector: 'type-activity-list-dialog',
  templateUrl: '../_dialog/delete-reset-dialog.html',
})
export class TypeActivityListDialog {

}

@Component({
  selector: 'anagrafica-list-dialog',
  templateUrl: '../_dialog/check-del-dialog.html',
})
export class TypeActivityCheckDialog {

}