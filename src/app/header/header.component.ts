import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }
  showLoginOptions:boolean=false;
  showProfileOptions:boolean=false;
  isLoggedIn:boolean=false;
  ngOnInit() {
    this.authService.currentUserData.subscribe(data => {
      if(data != null){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    })
    this.isLoggedIn = this.authService.isLogIn();
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn = this.showProfileOptions =false;
    this.router.navigate(['/login']);
  }
}
