import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaCreateComponent } from './sistema-create.component';

describe('SistemaCreateComponent', () => {
  let component: SistemaCreateComponent;
  let fixture: ComponentFixture<SistemaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
