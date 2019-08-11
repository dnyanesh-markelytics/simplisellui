import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.authService.LoggedUserData(null);
    // this.isLoggedIn = this.showProfileOptions =false;
    this.router.navigate(['/login']);
  }
}
