import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecniciListComponent } from './tecnici-list.component';

describe('TecniciListComponent', () => {
  let component: TecniciListComponent;
  let fixture: ComponentFixture<TecniciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecniciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecniciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
