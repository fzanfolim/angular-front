import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ListComponent } from './list.component';
import { ApiService } from '../services/api.service';
import { RouterTestingModule } from '@angular/router/testing';


class BackendServiceMock {
  get(): Observable<any[]> {
    return of([
      { id: '12345' },
      { id: '54321'},
    ]);
  }
  post(): Observable<any[]> {
    return of([
      { id: '12345' },
      { id: '54321'},
    ]);
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[{provide:ApiService,useClass:BackendServiceMock}],
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
