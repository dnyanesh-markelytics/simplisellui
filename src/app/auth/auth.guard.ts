import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
  ) { }
  
  canActivate(): boolean {
    let token = localStorage.getItem('user');
    if (token == null || token == undefined) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}


