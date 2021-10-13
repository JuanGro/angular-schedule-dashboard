import { environment } from './../../../../environments/environment';

export class Connections {
  public APIUrl: string;
  public registerUrl: string;
  public loginUrl: string;

  constructor() {
    this.APIUrl = environment.API_URL;
    this.registerUrl = 'signup/';
    this.loginUrl = 'auth/login/';
  }
}
