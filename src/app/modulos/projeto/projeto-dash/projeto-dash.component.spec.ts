import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDashComponent } from './projeto-dash.component';

describe('ProjetoDashComponent', () => {
  let component: ProjetoDashComponent;
  let fixture: ComponentFixture<ProjetoDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
