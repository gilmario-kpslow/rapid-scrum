import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidInputBaseComponent } from './rapid-input-base.component';

describe('RapidInputBaseComponent', () => {
  let component: RapidInputBaseComponent;
  let fixture: ComponentFixture<RapidInputBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidInputBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidInputBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
