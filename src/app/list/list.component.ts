import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {CLIENT} from '../model/client.model'
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
// const ELEMENT_DATA: LIST_CLIENT[] = [];
import {StorageService} from '../services/storage.service'
import { catchError, switchMap, pluck } from 'rxjs/operators';
import {  of } from 'rxjs';

interface customerResponse {
  results:CLIENT[]
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  public readonly customers$ =  this.apiService
                                      .post('functions/login',JSON.stringify({
                                        username:environment.username,
                                        password:environment.password
                                      }))
                                     .pipe(
                                       switchMap((data:any)=> {
                                        this.storage.setAuthStorage(data.result)
                                        return this.apiService.get<customerResponse>('classes/Customer')
                                       }),
                                       pluck('results'),
                                       catchError((error) => {
                                        console.log(error)
                                        return of ([] as CLIENT[])
                                       })

                                     );
  
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'avatar'];
  
  
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
    ) {
    this.route.params.subscribe((res: any) => {
      console.log(res);
    });

    
  }

}
