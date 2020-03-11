import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-page',
  template: "<app-activity-list></app-activity-list>",
  styles: []
})
export class InitPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
