import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  constructor() {}

  /**
   * Method to get the current date
   */
  public getCurrentDate() {
    // Get current date with JS
    return new Date();
  }
}
