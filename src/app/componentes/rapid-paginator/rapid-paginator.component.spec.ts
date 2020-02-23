import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidPaginatorComponent } from './rapid-paginator.component';

describe('RapidPaginatorComponent', () => {
  let component: RapidPaginatorComponent;
  let fixture: ComponentFixture<RapidPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
