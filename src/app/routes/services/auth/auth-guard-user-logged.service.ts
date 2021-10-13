import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// Configuration
import { Alerts } from './../../configuration/alerts/alerts';

// Services
import { LocalStorageService } from './local-storage.service';
import { RedirectionService } from './../redirection/redirection.service';

@Injectable()
export class AuthGuardUserLoggedService implements CanActivate {
  public alerts: Alerts;

  constructor(
    public localStorageService: LocalStorageService,
    public redirectionService: RedirectionService
  ) {
    this.alerts = new Alerts();
  }

  canActivate() {
    // If exists a token or something saved in localStorage
    if (this.localStorageService.currentUserExists()) {
      // Redirect to login page
      this.redirectionService.redirect('/home');
      // Show the alert
      this.alerts.warningMessage(this.alerts.errorUserLoggedTitle, this.alerts.errorUserLoggedMessage);
      return false;
    } else {
      return true;
    }
  }
}
