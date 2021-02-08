import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStayComponent } from './view-stay.component';

describe('ViewStayComponent', () => {
  let component: ViewStayComponent;
  let fixture: ComponentFixture<ViewStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
