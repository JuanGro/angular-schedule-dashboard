import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// Services
import { LocalStorageService } from './local-storage.service';
import { RedirectionService } from './../redirection/redirection.service';

@Injectable()
export class AuthGuardUserNotLoggedService implements CanActivate {

  constructor(
    public localStorageService: LocalStorageService,
    public redirectionService: RedirectionService
  ) {}

  canActivate() {
    // If exists a token or something saved in localStorage
    if (this.localStorageService.currentUserExists()) {
      return true;
    } else {
      this.redirectionService.redirect('/login');
      return false;
    }
  }
}
