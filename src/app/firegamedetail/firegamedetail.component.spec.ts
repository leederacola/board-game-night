import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiregamedetailComponent } from './firegamedetail.component';

describe('FiregamedetailComponent', () => {
  let component: FiregamedetailComponent;
  let fixture: ComponentFixture<FiregamedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiregamedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiregamedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
