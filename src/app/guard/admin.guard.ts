import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>((subscriber) => {
      this.authService.isUserLoggedIn().subscribe((isLogged) => {
        if (!isLogged) {
          alert('You are not allowed to view this page. You are redirected to login Page');
          this.router.navigate(['admin/auth/login'], { queryParams: { retUrl: next.url } });
          subscriber.next(false);
        }
        return subscriber.next(true);
      }, (error) => {
        subscriber.error(error);
      }, () => {
        subscriber.complete();
      });
    });
  }


}
