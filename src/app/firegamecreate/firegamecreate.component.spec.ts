import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiregamecreateComponent } from './firegamecreate.component';

describe('FiregamecreateComponent', () => {
  let component: FiregamecreateComponent;
  let fixture: ComponentFixture<FiregamecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiregamecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiregamecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
