import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

// Configuration
import { Connections } from './../../configuration/connections/connections';
import { Alerts } from './../../configuration/alerts/alerts';
import { Configuration } from './../../configuration/configuration/configuration';

// Models
import { Course } from './../../models/course/course.model';
import { Period } from './../../models/period/period.model';
import { NgSelect } from '../../models/ng-select/ng-select';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Sweet alerts
const swal = require('sweetalert');

@Component({
  selector: 'app-study-program-edition',
  templateUrl: './study-program-edition.component.html',
  styleUrls: ['./study-program-edition.component.scss']
})
export class StudyProgramEditionComponent implements OnInit {
  // Configuration
  public alerts: Alerts;
  public configuration: Configuration;
  public course: Course;
  public period: Period;
  public courses: Array<Course>;
  public coursesInPeriod: Array<Array<Course>>;

  public remediales: Array<Course>;
  public firstSemester: Array<Course>;
  public secondSemester: Array<Course>;
  public thirdSemester: Array<Course>;
  public fourthSemester: Array<Course>;
  public fifthSemester: Array<Course>;
  public sixthSemester: Array<Course>;
  public seventhSemester: Array<Course>;
  public eightSemester: Array<Course>;
  public nineSemester: Array<Course>;

  public periodList: Array<NgSelect>;
  public periodListForCurrentStudyProgram: Array<Period>;
  public messageIfNoPeriods: string;
  public nameStudyProgram: string;
  public action: string;
  public item: NgSelect;
  public items: Array<NgSelect>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.configuration = new Configuration();
    this.alerts = new Alerts();
    this.messageIfNoPeriods = '¡Aún no has creado periodos!';
    this.nameStudyProgram = '';
    this.action = '';
    this.course = new Course();
    this.period = new Period();

    this.remediales = [];
    this.firstSemester = [];
    this.secondSemester = [];
    this. thirdSemester = [];
    this. fourthSemester = [];
    this. fifthSemester = [];
    this. sixthSemester = [];
    this. seventhSemester = [];
    this. eightSemester = [];
    this. nineSemester = [];

    this.coursesInPeriod = [
      this.remediales, this.firstSemester, this.secondSemester,
      this.thirdSemester, this.fourthSemester, this.fifthSemester,
      this.sixthSemester, this.seventhSemester, this.eightSemester,
      this.nineSemester
    ];
    this.courses = [];
    this.periodList = [];
    this.periodListForCurrentStudyProgram = [];
    // Prototype
    this.course = {
      name: 'Proyecto integrador para el desarrollo de soluciones empresariales',
      code: 'TC3054',
      units: 12,
      class_hours: 8,
      lab_hours: 0
    };

    this.courses = [this.course];
    this.item = new NgSelect(this.course);
    this.items = [this.item];

    this.periodList = [
      { id: '1', text: 'Remediales' },
      { id: '2', text: 'Primer semestre' },
      { id: '3', text: 'Segundo semestre' },
      { id: '4', text: 'Tercer semestre' },
      { id: '5', text: 'Cuarto semestre' },
      { id: '6', text: 'Quinto semestre' },
      { id: '7', text: 'Sexto semestre' },
      { id: '8', text: 'Séptimo semestre' },
      { id: '9', text: 'Octavo semestre' },
      { id: '10', text: 'Noveno semestre' }
    ];

    this.periodListForCurrentStudyProgram = [
      { name: 'Remediales' },
      { name: 'Primer semestre' },
      { name: 'Segundo semestre' },
      { name: 'Tercer semestre' },
      { name: 'Cuarto semestre' },
      { name: 'Quinto semestre' },
      { name: 'Sexto semestre' },
      { name: 'Séptimo semestre' },
      { name: 'Octavo semestre' },
      { name: 'Noveno semestre' }
    ];

    this.route.params.subscribe(params => {
      if (params['nameStudyProgram']) {
        this.nameStudyProgram = params['nameStudyProgram'];
      }
   });
  }

  /**
   * Method to set an empty course to show the modal cleared
   * @param form: The form handled in the HTML
   */
  public createCourse(form?: NgModel) {
    if (form) {
      this.setFormAsUntouched(form);
    }
    this.action = 'create';
    this.course = new Course();
  }

  /**
   * Method to set the course selected to show in the modal
   * @param courseToEdit: course selected
   */
  public editCourse(courseToEdit: Course, form?: NgModel) {
    if (form) {
      this.setFormAsUntouched(form);
    }
    this.action = 'edit';
    this.course = courseToEdit;
  }

  /**
   * Method to set the form as untouched to do not receive feedback before the user
   * starts to write
   * @param form: The form handled in the HTML template
   */
  public setFormAsUntouched(form: NgModel) {
    form.control.markAsUntouched();
  }

  /**
   * Method to delete a course and reload the list of them
   * @param course: Study program to delete
   */
  public deleteCourse(course: Course) {
    return this.confirmationMessage(this.alerts.deleteCourseMessage, this.alerts.deleteCourseConfirmationMessage);
    // Delete study program in Back
    // this.getStudyProgramList();
  }

  /**
   * Method to show the alert for delete study program confirmation
   * @param alertMessage: The message to display in the alert
   * @param confirmationMessage: The message to display when you have confirmed the delete
   */
  public confirmationMessage(alertMessage: string, confirmationMessage: string) {
    swal({
      title: this.alerts.confirmationAlertTitle,
      text: alertMessage,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: this.alerts.confirmationButton,
      cancelButtonText: this.alerts.cancelationButton,
      closeOnConfirm: false,
      closeOnCancel: false
    }, (isConfirm) => {
      if (isConfirm) {
        this.alerts.successMessage(this.alerts.confirmationTitle, confirmationMessage);
      } else {
        this.alerts.errorMessage(this.alerts.cancelationTitle, this.alerts.cancelationMessage);
      }
    });
  }

  public submitCourseForm(course: any, form: any, modal: ModalDirective) {
    // Push course to course list
    this.courses.push(course);
    // Hide modal when is sended
    modal.hide();
  }
}
