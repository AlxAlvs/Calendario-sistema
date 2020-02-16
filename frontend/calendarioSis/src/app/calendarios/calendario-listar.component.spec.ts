import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioListarComponent } from './calendario-listar.component';

describe('CalendarioListarComponent', () => {
  let component: CalendarioListarComponent;
  let fixture: ComponentFixture<CalendarioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
