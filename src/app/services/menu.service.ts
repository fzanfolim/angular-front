import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})



export class MenuService {

  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;


  private showMenu = new BehaviorSubject<boolean>(false);
  public readonly showMenu$ = this.showMenu.asObservable();

  // private showMenu = new BehaviorSubject<MatSidenav>(this.sidenav);
  // public readonly showMenu$ = this.showMenu.asObservable();


  constructor() {

   }

  public toggleMenu(): void {
    this.showMenu.next(!this.showMenu.value);
  }

  get(): Observable<boolean> {
    return this.showMenu.asObservable();
  }

  // public toogleMenu(changeMenu:boolean) : void{
  //   if (changeMenu) {
  //     this.showMenu.value.mode = 'over';
  //     this.showMenu.value.close();
      
  //   } else {
  //     this.showMenu.value.mode = 'side';
  //     this.showMenu.value.open();
  //   }
  //   this.showMenu.next(this.showMenu.value)
  // }

}
