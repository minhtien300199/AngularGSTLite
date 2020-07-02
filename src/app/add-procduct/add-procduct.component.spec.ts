import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcductComponent } from './add-procduct.component';

describe('AddProcductComponent', () => {
  let component: AddProcductComponent;
  let fixture: ComponentFixture<AddProcductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
