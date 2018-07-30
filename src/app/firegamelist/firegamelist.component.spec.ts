import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiregamelistComponent } from './firegamelist.component';

describe('FiregamelistComponent', () => {
  let component: FiregamelistComponent;
  let fixture: ComponentFixture<FiregamelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiregamelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiregamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
