import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDashComponent } from './game-dash.component';

describe('GameDashComponent', () => {
  let component: GameDashComponent;
  let fixture: ComponentFixture<GameDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
