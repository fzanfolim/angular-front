import { Component, OnInit } from '@angular/core';
import {CLIENT} from '../model/client.model';
import { ApiService } from '../services/api.service';
import{ SnackBarService } from '../services/snack-bar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  item:CLIENT = new CLIENT();
  
  constructor(
    private apiService: ApiService,
    private snackBar: SnackBarService,
    private router: Router,
    private route: ActivatedRoute,
  ) {


   }

  ngOnInit(): void {
  }

  save(){

    this.apiService
      .post('classes/Customer',JSON.stringify(this.item))
      .subscribe({
        next: data => {
        console.log(data)
        this.snackBar.openSnackBar('Incluso com sucesso','OK')
        setTimeout(()=> {
          this.router.navigate(['/list', data], { relativeTo: this.route.parent, skipLocationChange: true   });
        },1000)
        },
        error: error => {
            console.error('ERROR!', error);
          }
    });
    
  } 
}
