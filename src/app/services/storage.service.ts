import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  private readonly parseStorageUserKey = `Parse/${environment.applicationId}/currentUser`;

  constructor() { }

  private setObject(key:string, value:Object) {
    window.localStorage[key] = JSON.stringify(value); 
    return this;
  }

  private getObject(key:string) : Object | null {
    return window.localStorage[key] 
      ? JSON.parse(window.localStorage[key]) 
      : null
  }

  public setAuthStorage(value:string):void {
    this.setObject(this.parseStorageUserKey, value)
  }

  public getAuthStorage(value:string):Object | null {
    return this.getObject(this.parseStorageUserKey)
  }



}
