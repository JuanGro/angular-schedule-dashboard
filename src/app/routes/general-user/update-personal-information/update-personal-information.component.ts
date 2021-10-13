import { Component, OnInit } from '@angular/core';
// Forms
import { NgModel } from '@angular/forms';
// Dates
import { DatePipe } from '@angular/common';
// Toasters
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
// Models
import { User } from './../user-model';
// App settings
import { AppSettings } from './../../app-settings';

@Component({
  selector: 'app-update-personal-information',
  templateUrl: './update-personal-information.component.html',
  styleUrls: ['./update-personal-information.component.scss']
})
export class UpdatePersonalInformationComponent implements OnInit {
  public app: AppSettings;
  public user: User;
  public today: Date;
  public title_page: string;
  public institutional_domain: string;
  public toaster: any;
  public toasterConfig: any;
  public toasterconfig: ToasterConfig;

  constructor(public toasterService: ToasterService) { }

  /**
   * Method to initialize the user when the component is built
   */
  ngOnInit() {
    this.app = new AppSettings();
    // Initialize form
    this.user = new User();
    // Get current date
    this.today = new Date();
    // Set the title for current page
    this.title_page = 'Actualiza tu información personal';
    // Get the domain for institutional email
    this.institutional_domain = '@itesm.mx';
    // Set the toaster configuration
    this.toasterconfig = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      showCloseButton: true
    });
  }

  /**
   * Method to append the institutional domain to the parameter (e.g the id_college to get the email)
   * @param word: An string to append the institutional domain
   */
  appendInstitutionalDomain(word: string) {
    return word + this.institutional_domain;
  }

  /**
   * Method executed when you submit the info in register form
   * @param form: NgModel form used in HTML template
   * @param user: User model get of the form information
   */
  submitPersonalInformationForm(user: User, form?: NgModel) {
    // console.log(user);
  }

  /**
   * Method to show a success message when the info has sent correctly to Back-End
   */
  successMessage() {
    this.toasterService.pop('success', this.app.correctUpdatePersonalInfoTitle, this.app.correctUpdatePersonalInfoMessage);
  }

  /**
   * Method to show an error message when the info has not sent correctly to Back-End
   */
  errorMessage() {
    this.toasterService.pop('error', this.app.errorTitle, this.app.errorMessage);
  }
}
