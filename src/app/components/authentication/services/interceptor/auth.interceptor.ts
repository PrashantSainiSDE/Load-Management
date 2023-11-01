import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, exhaustMap, take, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const AuthInterceptor: HttpInterceptorFn = 
  (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

      const auth = inject(AuthService)
      const router = inject(Router)

      return auth.user.pipe(
        take(1),
        exhaustMap((user) => {
          if (!user) {
            return next(req);
          }
          const newReq = req.clone({setHeaders:{Authorization : `Bearer ${user.token}`}})
          return next(newReq);
        }),catchError((error) => {
          router.navigate(['/auth']);
          return throwError(() => error);
        })
      );
  };
