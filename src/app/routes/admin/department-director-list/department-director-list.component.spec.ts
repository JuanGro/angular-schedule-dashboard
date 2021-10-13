import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDirectorListComponent } from './department-director-list.component';

describe('DepartmentDirectorListComponent', () => {
  let component: DepartmentDirectorListComponent;
  let fixture: ComponentFixture<DepartmentDirectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDirectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDirectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
