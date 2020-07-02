import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListInfoComponent } from './card-list-info.component';

describe('CardListInfoComponent', () => {
  let component: CardListInfoComponent;
  let fixture: ComponentFixture<CardListInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
