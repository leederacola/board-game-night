import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercrudComponent } from './playercrud.component';

describe('PlayercrudComponent', () => {
  let component: PlayercrudComponent;
  let fixture: ComponentFixture<PlayercrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayercrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayercrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
