import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

// Configuration
import { Configuration } from './../../configuration/configuration/configuration';
import { Connections } from './../../configuration/connections/connections';
import { Alerts } from './../../configuration/alerts/alerts';

// Services
import { HttpService } from './../../services/http/http.service';
import { RedirectionService } from './../../services/redirection/redirection.service';
import { DateService } from './../../services/date/date.service';

// Models
import { Student } from './../../models/student/student.model';

@Component({
    providers: [HttpService, RedirectionService, DateService],
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Configuration
  public configuration: Configuration;
  public connections: Connections;
  public alerts: Alerts;
  // Models
  public student: Student;

  public titlePage: string;
  public today: Date;

  constructor(
    public httpService: HttpService,
    public redirectionService: RedirectionService,
    public dateService: DateService
  ) {}

  /**
   * Method to initialize the component
   */
  ngOnInit() {
    this.today = new Date();
    // Set the title for current page
    this.titlePage = 'Registro';
    // Get the details for the app
    this.configuration = new Configuration();
    this.connections = new Connections();
    this.alerts = new Alerts();
    // Initialize form
    this.initializeUser();
    // Get current date
    this.today = this.dateService.getCurrentDate();
    // Set the default values for form
    this.defineDefaultValuesInForm();
  }

  /**
   * Method to use the http service to send the object to Back-End
   * @param student: An student object to be saved in the Back-End
   */
  public sendToBackEnd(student: Student, form?: NgModel) {
    this.httpService.post(this.connections.registerUrl, student)
    .subscribe(
      data => {
        this.correctResponseFromBackEnd(data);
        return true;
      },
      error => {
        this.errorResponseFromBackEnd(form);
        // Return error type
        return Observable.throw(error);
      }
    );
  }

  /**
   * Method to define the behaviour for a correct response from Back-End
   * @param data: The response data got by Back-End
   */
  public correctResponseFromBackEnd(data: any) {
    this.alerts.successMessage(this.alerts.registerTitle, this.alerts.registerMessage);
    // Redirect to login page
    this.redirectionService.redirect('/login');
  }

  /**
   * Method to define the behaviour for an incorrect response from Back-End
   * @param form: NgModel form used in HTML template
   */
  public errorResponseFromBackEnd(form?: NgModel) {
    this.alerts.errorMessage(this.alerts.generalErrorTitle, this.alerts.generalErrorMessage);
    // Reset the student object
    this.resetForm();
    if (form) {
      // Reset the form
      form.control.markAsUntouched();
    }
  }

  /**
   * Method executed when you submit the info in register form
   * @param form: NgModel form used in the HTML template
   * @param user: Information from the form
   */
  public submitRegisterForm(student: Student, form?: NgModel) {
    // Get the email with the id college provided in the email field
    student.email = this.configuration.appendInstitutionalDomain(this.student.id_college);
    // Send the status, we should remove this in the Back-End refactor
    student.status = true;
    if (form) {
      // Call HTTP method
      this.sendToBackEnd(student, form);
    }
  }

  /**
   * Method to define default values
   * @param student: Student object to change to see them in form like default values
   */
  public defineDefaultValuesInForm() {
    this.student.nationality = 'Mexicana';
    this.student.gender = 'Masculino';
    this.student.local = 'Local';
  }

  /**
   * Method to reset the form
   */
  public resetForm() {
    this.initializeUser();
    // Set the default values for dropdowns
    this.defineDefaultValuesInForm();
  }

  /**
   * Method to initialize the Student object
   */
  public initializeUser() {
    this.student = new Student();
  }
}
