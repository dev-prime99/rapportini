import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anagrafica-handler',
  templateUrl: './anagrafica-handler.component.html',
})
export class AnagraficaHandlerComponent implements OnInit {

  anagraficaForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
