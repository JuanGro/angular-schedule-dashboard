import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

// Configuration
import { Configuration } from './../../configuration/configuration/configuration';
import { Connections } from './../../configuration/connections/connections';
import { Alerts } from './../../configuration/alerts/alerts';

// Services
import { HttpService } from './../../services/http/http.service';
import { RedirectionService } from './../../services/redirection/redirection.service';
import { LocalStorageService } from './../../services/auth/local-storage.service';

// Models
import { User } from './../../models/user/user.model';

@Component({
    providers: [HttpService, RedirectionService, LocalStorageService],
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Configuration
  public configuration: Configuration;
  public connections: Connections;
  public alerts: Alerts;
  // Model
  public user: User;

  public titlePage: string;

  constructor(
    public httpService: HttpService,
    public localStorageService: LocalStorageService,
    public redirectionService: RedirectionService
  ) {}

  /**
   * Method to initialize the component
   */
  ngOnInit() {
    // Set the title for current page
    this.titlePage = 'Login';
    // Get the details for the app
    this.configuration = new Configuration();
    this.connections = new Connections();
    this.alerts = new Alerts();
    // Initialize form
    this.initializeUser();
  }

  /**
   * Method executed when you submit the info in register form
   * @param form: NgModel form used in HTML template
   * @param user: Information got from the form
   */
  public submitRegisterForm(user: User, form?: NgModel) {
    // Get the email with the id college provided in the email field
    user.email = this.configuration.appendInstitutionalDomain(this.user.email);
    this.sendToBackEnd(user, form);
  }

  /**
   * Method to use the http service to send the object to Back-End
   * @param student: An student object to be saved in the Back-End
   */
  public sendToBackEnd(user: User, form?: NgModel) {
    this.httpService.post(this.connections.loginUrl, user)
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
    // Save the token
    this.localStorageService.saveCurrentUser(data.id, data.role, data.id_college, data.auth_token);
    // Redirect to login page
    this.redirectionService.redirect('/home');
  }

  /**
   * Method to define the behaviour for an incorrect response from Back-End
   * @param form: NgModel form used in HTML template
   */
  public errorResponseFromBackEnd(form?: NgModel) {
    this.alerts.errorMessage(this.alerts.loginErrorTitle, this.alerts.loginErrorMessage);
    // Reset the student object
    this.resetForm();
    if (form) {
      // Reset the form
      form.control.markAsUntouched();
    }
  }

  /**
   * Method to reset the form, clearing the user object
   */
  public resetForm() {
    this.initializeUser();
  }

  /**
   * Method to initialize the User object
   */
  public initializeUser() {
    this.user = new User();
  }
}
