import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

// Configuration
import { Alerts } from './../../configuration/alerts/alerts';

// Models
import { StudyProgram } from './../../models/study-program/study-program.model';
import { ModalModule, ModalOptions, ModalDirective } from 'ngx-bootstrap/modal';

// Sweet alerts
const swal = require('sweetalert');

@Component({
  selector: 'app-study-program-list',
  templateUrl: './study-program-list.component.html',
  styleUrls: ['./study-program-list.component.scss']
})
export class StudyProgramListComponent implements OnInit {
  // Configuration
  public alerts: Alerts;
  // Variables to manage the study programs
  public studyProgram: StudyProgram;
  public studyProgramList: StudyProgram[];
  // Variable to know what action will be executed in modal
  public action: string;
  // Messages to show in HTML template
  public titlePage: string;
  public messageIfNoStudyPrograms: string;

  constructor() { }

  ngOnInit() {
    // Initialize everything
    this.alerts = new Alerts();
    this.studyProgram = new StudyProgram();
    this.studyProgramList = [];
    this.action = '';
    this.titlePage = 'Planes de estudio';
    this.messageIfNoStudyPrograms = '¡Aún no has creado programas de estudio!';

    // Set the default values for form
    this.defineDefaultValuesInForm(this.studyProgram);

    // PROTOTYPE
    const studyProgramExample: StudyProgram = {
      name: 'ISC11',
      status: true,
      description: 'Lorem',
      created_at: '28/01/2018',
      updated_at: '28/01/2018',
      career_code: 'ISC'
    };
    this.studyProgramList = [studyProgramExample];
  }

  /**
   * Method to set an empty study program to show the modal cleared
   * @param form: The form handled in the HTML
   */
  public createStudyProgram(form?: NgModel) {
    if (form) {
      this.setFormAsUntouched(form);
    }
    this.action = 'create';
    this.studyProgram = new StudyProgram();
    this.defineDefaultValuesInForm(this.studyProgram);
  }

  /**
   * Method to set the study program selected to show in the modal
   * @param studyProgramToEdit: Study program selected
   */
  public editStudyProgram(studyProgramToEdit: StudyProgram, form?: NgModel) {
    if (form) {
      this.setFormAsUntouched(form);
    }
    this.action = 'edit';
    this.studyProgram = studyProgramToEdit;
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
   * Method to define default values
   * @param studyProgram: Study program object to change, to define its default values
   */
  public defineDefaultValuesInForm(studyProgram: StudyProgram) {
    studyProgram.status = true;
  }

  /**
   * Method to delete a study program and reload the list of them
   * @param studyProgram: Study program to delete
   */
  public deleteStudyProgram(studyProgram: StudyProgram) {
    this.confirmationMessage(this.alerts.deleteStudyProgramMessage, this.alerts.deleteStudyProgramConfirmationMessage);
    // Delete study program in Back
    // Reload study program list
    this.getStudyProgramList();
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

  /**
   * Method to get the study program handled in the studyProgramModal
   * @param studyProgram: Study program handled in the modal
   * @param form: Form in the modal in the HTML template
   */
  public submitStudyProgramForm(studyProgram: StudyProgram, form?: NgModel, modal?: ModalDirective) {
    if (form) {
      this.setFormAsUntouched(form);
    }
    this.sendToBackEnd(studyProgram, this.action);
    if (modal) {
      modal.hide();
    }
    // Add to list the study program
    this.studyProgramList.push(studyProgram);
    // Reload study program list
    this.getStudyProgramList();
  }

  /**
   * Method to receive the study program list from Back-End and reload it in the component
   */
  public getStudyProgramList() {
    // Receive from Back-End
    // Reload study program list
  }

  /**
   * Method to send the study program to the Back-End depending on the action to execute
   * @param studyProgram: Study program to send to Back-End
   * @param action: The action executed to know if the user is creating or editing a study
   * program
   */
  public sendToBackEnd(studyProgram: StudyProgram, action: string) {
    if (action === 'edit') {
      console.log('edit');
    } else {
      console.log('create');
    }
  }
}
