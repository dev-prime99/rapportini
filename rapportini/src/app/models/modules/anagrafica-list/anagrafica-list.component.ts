
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnagraficaService } from '../../../service/anagrafica.service';
import { AnagraficaDto } from '../../anagrafica-dto';
import { __values } from 'tslib';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-anagrafica-list',
  templateUrl: './anagrafica-list.component.html',
  styleUrls: ['./anagrafica-list.component.scss']
})


export class AnagraficaListComponent implements OnInit {
  rows:AnagraficaDto[];

  displayedColumns: string[] = ['identity', 'name', 'type', 'city', 'bt1', 'bt2'];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private anaService: AnagraficaService,private route:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.anaService.getAnagraficaList().subscribe(x=>{
      this.dataSource = new MatTableDataSource(x);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(ana: AnagraficaDto) {
    const dialogRef = this.dialog.open(AnagraficaListDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result){
        // console.log("funziona");        
        this.anaService.delAnagrafica(ana);
        this.dataSource = this.anaService.getAnagraficaList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  resetAnagrafica(){
    this.anaService.resetList();
    this.dataSource = this.anaService.getAnagraficaList()
  }

  newAnagrafica(){
    this.route.navigateByUrl('anagrafica')
  }

  editAnagrafica(ana:AnagraficaDto){
    this.route.navigateByUrl('anagrafica/'+ana.identity);
  }

}

@Component({
  selector: 'anagrafica-list-dialog',
  templateUrl: 'anagrafica-list-dialog.html',
})
export class AnagraficaListDialog {

}