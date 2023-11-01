import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, map, take } from 'rxjs';

export const AuthGuard: CanActivateFn = 
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> => {
    
      const router = inject(Router)
      const auth = inject(AuthService)

      return auth.user.pipe(
        take(1),
        map((user) => {
          const isAuth = !!user;
          if (!isAuth) {
            return router.createUrlTree(['/auth']);
          }
          return true;
        })
      );
  };
