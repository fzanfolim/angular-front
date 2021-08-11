import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message:string , button:string, horizontalPosition?:MatSnackBarHorizontalPosition, verticalPosition?:MatSnackBarVerticalPosition ) {
    this._snackBar.open(message, button, {
      horizontalPosition: horizontalPosition ? horizontalPosition : this.horizontalPosition,
      verticalPosition: verticalPosition ? verticalPosition :  this.verticalPosition,
    });
  }


}
