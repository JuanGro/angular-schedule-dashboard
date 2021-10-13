import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesToTakeComponent } from './classes-to-take.component';

describe('ClassesToTakeComponent', () => {
  let component: ClassesToTakeComponent;
  let fixture: ComponentFixture<ClassesToTakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesToTakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesToTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
