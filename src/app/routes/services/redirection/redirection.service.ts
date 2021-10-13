import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectionService {
  constructor(private router: Router) {}

  /**
   * Method to redirect to the url page
   * @param url: string with the url to redirect
   */
  public redirect(url: string) {
    this.router.navigate([url]);
  }
}
