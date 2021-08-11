import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { ApiService } from '../services/api.service';

import { Observable, of } from 'rxjs';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

class BackendServiceMock {
  post(): Observable<any[]> {
    return of([
      { id: '12345' },
      { id: '54321'},
    ]);
  }
}


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  MatSnackBarModule,RouterTestingModule, FormsModule,  ],
      providers:[{provide:ApiService,useClass:BackendServiceMock}],
      declarations: [ AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add Customer', () => { 

  expect(component.save())
  
  });





});
