import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnagraficaService } from 'src/app/service/anagrafica.service';
import { AnagraficaDto } from 'src/app/models/anagrafica-dto';

@Component({
  selector: 'app-anagrafica-list',
  templateUrl: './anagrafica-list.component.html',
  styleUrls: ['./anagrafica-list.component.scss']
})
export class AnagraficaListComponent implements OnInit {

  rows:AnagraficaDto[];

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
  
}