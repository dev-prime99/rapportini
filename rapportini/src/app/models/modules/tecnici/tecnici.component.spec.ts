import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecniciComponent } from './tecnici.component';

describe('TecniciComponent', () => {
  let component: TecniciComponent;
  let fixture: ComponentFixture<TecniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
