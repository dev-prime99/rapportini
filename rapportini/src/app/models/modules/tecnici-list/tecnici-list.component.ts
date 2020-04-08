
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TecniciService } from '../../../service/tecnici.service';
import { TecniciDto } from '../../tecnici-dto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tecnici-list',
  templateUrl: './tecnici-list.component.html',
  styles: ['table{width: 100%} th{width: calc(100% / 6)}']
})
export class TecniciListComponent implements OnInit {

  rows: TecniciDto[];

  displayedColumns: string[] = ['identity', 'nome', 'surname', 'bt3', 'bt1', 'bt2'];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private route:Router, private tecService: TecniciService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tecService.getTecniciList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log(this.actService["activityList"][0]["project"]);
    
  }

  // selectTec(ana: TecniciDto){
  //   this.tecService.selectUser(ana.identity);
  // }

  openDialogDel(ana: TecniciDto) {

    const dialogRef = this.dialog.open(TecniciListDialog);
    
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.tecService.delTecnici(ana);
        this.dataSource = this.tecService.getTecniciList();
      }
    });

  }

  openDialogRes() {
    const dialogRef = this.dialog.open(TecniciListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.tecService.resetList();
        this.dataSource = this.tecService.getTecniciList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newTecnici(){
    this.route.navigateByUrl('tecnici')
  }

  editTecnici(ana:TecniciDto){
    // console.log(ana);
    this.route.navigateByUrl('tecnici/'+ana.identity);
  }

}

@Component({
  selector: 'tecnici-list-dialog',
  templateUrl: '../_dialog/delete-reset-dialog.html',
})
export class TecniciListDialog {

}