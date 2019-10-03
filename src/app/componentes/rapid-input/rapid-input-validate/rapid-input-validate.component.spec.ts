import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidInputValidateComponent } from './rapid-input-validate.component';

describe('RapidInputValidateComponent', () => {
  let component: RapidInputValidateComponent;
  let fixture: ComponentFixture<RapidInputValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidInputValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidInputValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
