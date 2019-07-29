import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(
    public router: Router,
  ) { }

  canActivate(): boolean {
    let user = localStorage.getItem('user');
    if (user != null || user != undefined) {
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
