import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnagraficaService } from '../../../service/anagrafica.service';
import { AnagraficaDto } from '../../anagrafica-dto';
import { __values } from 'tslib';
import { RowContext } from '@angular/cdk/table';


@Component({
  selector: 'app-anagrafica-list',
  templateUrl: './anagrafica-list.component.html',
  styleUrls: ['./anagrafica-list.component.scss']
})


export class AnagraficaListComponent implements OnInit {
  rows:AnagraficaDto[];

  displayedColumns: string[] = ['identity', 'name', 'type', 'city', 'bt1', 'bt2'];
  dataSource = this.anaService.getAnagraficaList()

  constructor(private anaService: AnagraficaService,private route:Router) { }

  ngOnInit(): void {
    this.anaService.getAnagraficaList().subscribe(x=>{
      this.rows = x;
    });
  }

  resetAnagrafica(){
    this.anaService.resetList();
    this.anaService.getAnagraficaList().subscribe(x=>{
      this.rows = x;
    });
  }

  newAnagrafica(){
    this.route.navigateByUrl('anagrafica')
  }

  editAnagrafica(ana:AnagraficaDto){
    this.route.navigateByUrl('anagrafica/'+ana.identity);
  }

  deleteAnagrafica(ana:AnagraficaDto){
    this.anaService.delAnagrafica(ana);
  }
  
}