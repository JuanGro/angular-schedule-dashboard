import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Configuration
import { Connections } from './../../configuration/connections/connections';

@Injectable()
export class HttpService {
  public connections: Connections;

  constructor(private http: Http) {
    this.connections = new Connections();
  }

  /**
   * Method to define the headers to send the response in an specific format (json)
   * and the authentication if is necessary
   * @param token?: The token to authenticate the request (optional)
   */
  public setHeaders(token?: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (token) {
      headers.append('authentication', token);
    }
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  /**
   * Method to request a GET to Back-End and receive the response
   * @param urlGET: The url to request the get of the object
   * @param token?: The token to authenticate the request (optional)
   */
  get(urlGET: string, token?: string): Observable<Object> {
    const options = this.setHeaders(token);
    // Return the response when send the GET request
    return this.http.get(urlGET, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method to request a POST to Back-End and receive the response, defining in headers
   * the type of the request
   * @param urlPOST: The url to request the post of the object
   * @param object: The object to send with the request
   * @param token?: The token to authenticate the request (optional)
   */
  post(urlPOST: string, object: Object, token?: string): Observable<Object> {
    const objectString = JSON.stringify(object);
    const options = this.setHeaders(token);
    // Return the response when send the POST request
    return this.http.post(this.connections.APIUrl + urlPOST, objectString, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method to request a PUT to Back-End and receive the response, defining in headers
   * the type of the request
   * @param urlPUT: The url to request the put of the object
   * @param object: The object to send with the request
   * @param id: The id of the current object
   * @param token?: The token to authenticate the request (optional)
   */
  put(urlPUT: string, object: Object, id: string, token?: string): Observable<Object> {
    const objectString = JSON.stringify(object);
    const options = this.setHeaders(token);
    // Return the response when send the PUT request
    return this.http.put(this.connections.APIUrl + urlPUT + id + '/', objectString, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method to request a DELETE to Back-End and receive the response
   * @param urlDELETE: The url to request the object to delete
   * @param id: The id of the current object
   * @param token?: The token to authenticate the request (optional)
   */
  delete(urlDELETE: string, id: string, token?: string): Observable<Object> {
    const options = this.setHeaders(token);
    // Return the response when send the DELETE request
    return this.http.delete(this.connections.APIUrl + urlDELETE + id + '/', options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
