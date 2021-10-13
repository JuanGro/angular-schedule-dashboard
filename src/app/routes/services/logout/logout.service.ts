import { Injectable } from '@angular/core';

// Services
import { LocalStorageService } from './../auth/local-storage.service';
import { RedirectionService } from './../redirection/redirection.service';

@Injectable()
export class LogoutService {
  constructor(
    public localStorageService: LocalStorageService,
    public redirectionService: RedirectionService
  ) {}

  logout() {
    this.localStorageService.removeCurrentUser();
    // Redirect to login page
    this.redirectionService.redirect('/login');
  }
}
