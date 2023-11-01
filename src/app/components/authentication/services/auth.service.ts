import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginPayload, LoginResponce } from '../types/login.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public userSubject = new BehaviorSubject<LoginResponce | null>(null);
  public user!: Observable<LoginResponce | null>;
  
  private http = inject(HttpClient);
  private router = inject(Router);

  
  constructor() {
    this.userSubject.next((JSON.parse(localStorage.getItem('session')!)));
    this.user = this.userSubject.asObservable();
  }



  get token() {
    return this.user.pipe(map((user) => {user?.token}))
  }
  


  login(payload: LoginPayload): Observable<LoginResponce> {
    const url = environment.baseUrl + '/login'

    return this.http.post<LoginResponce>( url, payload )
      .pipe(
        take(1),
        catchError(this.handleError),
        tap((data) => {
          this.handleAuthentication(data)
        })
      )
  }

  logout(): void {
    this.userSubject.next(null);
    this.router.navigate(['/auth']);
    // localStorage.removeItem('session');
    localStorage.clear();
  }





  private handleAuthentication(loginResponse: LoginResponce): void {

    this.userSubject.next(loginResponse)
    localStorage.setItem('session', JSON.stringify(loginResponse));
  }
 
  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong!';
    
    if(!errorResponse.error || !errorResponse.error?.error){
      return throwError(() => errorMessage);
    }
    errorMessage = errorResponse.error?.error
    return throwError(() => errorMessage);
  }


   
}
