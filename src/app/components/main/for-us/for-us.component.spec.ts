import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForUsComponent } from './for-us.component';

describe('ForUsComponent', () => {
  let component: ForUsComponent;
  let fixture: ComponentFixture<ForUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
