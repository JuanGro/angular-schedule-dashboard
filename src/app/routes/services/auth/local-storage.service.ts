import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {}

  /**
   * Method to get the currentUser
   */
  public getCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }

  /**
   * Method to save the current user
   * @param id: The id of the user in database
   * @param role: The current role of the user
   * @param id_college: The id_college of the user
   * @param token: The token to authenticate him
   */
  public saveCurrentUser(id: number, role: string, id_college: string, token: string) {
    localStorage.setItem('currentUser', JSON.stringify({
      id:         id,
      role:       role,
      id_college: id_college,
      token:      token
    }));
  }

  /**
   * Method to remove the currentUser
   */
  public removeCurrentUser() {
    localStorage.removeItem('currentUser');
  }

  /**
   * Method to get the user id
   */
  public getIdUser() {
    const currentUser = this.getCurrentUser();
    return currentUser.id;
  }

  /**
   * Method to get the role
   */
  public getRole() {
    const currentUser = this.getCurrentUser();
    return currentUser.role;
  }

  /**
   * Method to get the id college
   */
  public getIdCollege() {
    const currentUser = this.getCurrentUser();
    return currentUser.id_college;
  }

  /**
   * Method to get the token to use it in http service
   */
  public getToken() {
    const currentUser = this.getCurrentUser();
    return currentUser.token;
  }

  /**
   * Method to clear all the localStorage
   */
  public clearLocalStorage() {
    localStorage.clear();
  }

  /**
   * Method to know if the currentUser exists
   */
  public currentUserExists() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
}
