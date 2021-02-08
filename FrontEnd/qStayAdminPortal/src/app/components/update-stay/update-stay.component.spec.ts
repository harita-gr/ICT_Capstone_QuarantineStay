import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStayComponent } from './update-stay.component';

describe('UpdateStayComponent', () => {
  let component: UpdateStayComponent;
  let fixture: ComponentFixture<UpdateStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
