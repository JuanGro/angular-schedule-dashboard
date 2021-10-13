import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramEditionComponent } from './study-program-edition.component';

describe('StudyProgramEditionComponent', () => {
  let component: StudyProgramEditionComponent;
  let fixture: ComponentFixture<StudyProgramEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
