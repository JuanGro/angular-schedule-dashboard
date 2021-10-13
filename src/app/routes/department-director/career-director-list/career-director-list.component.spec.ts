import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDirectorListComponent } from './career-director-list.component';

describe('CareerDirectorListComponent', () => {
  let component: CareerDirectorListComponent;
  let fixture: ComponentFixture<CareerDirectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDirectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDirectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
