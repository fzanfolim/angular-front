import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly parseStorageUserKey = `Parse/${environment.applicationId}/currentUser`;

  private readonly defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': environment.applicationId,
    'x-omnichat-platform': environment.platform, //web
  }); 

  constructor(
    private httpClient: HttpClient
    ) { }

  private getLocalStorageSessionToken(): string | null {
    const userStorage = localStorage.getItem(this.parseStorageUserKey);
    
    return userStorage
      ? JSON.parse(userStorage).sessionToken
      : null;
  }


  private getHeaders(token = this.getLocalStorageSessionToken()): HttpHeaders {
    console.log('token', token)
    return token
      ? this.defaultHeaders.set('X-Parse-Session-Token', token)
      : this.defaultHeaders;
  }

  public get<T>(path: string, sessionToken?: string): Observable<T> {
    const url = `${environment.serverUrl}${path}`;
    const headers = this.getHeaders(sessionToken);

    return this.httpClient.get<T>(url, { headers });
  }

  public post<T>(path: string, body: string , sessionToken?: string): Observable<T> {
    const url = `${environment.serverUrl}${path}`;
    const headers = this.getHeaders(sessionToken);

    return this.httpClient.post<T>(url,body, { headers });

  }





  



}
