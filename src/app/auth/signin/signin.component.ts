import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }
    errorMessage:string='';
  ngOnInit() {
  }

  logIn(contact_no,password){
    contact_no = contact_no || undefined;
    password = password || undefined;
    this.errorMessage='';
    if(password  == undefined || contact_no == undefined){
      this.errorMessage = 'credentials are required'; 
      return;
    }
    
    this.authService.logIn({'contact_no':contact_no,'password':password}).subscribe(
      (data) =>{
        if(data.success){
          localStorage.setItem('user',JSON.stringify(data.data));
          this.authService.LoggedUserData(JSON.stringify(data.data));
          this.router.navigate(['/products']);
        }else{
          this.errorMessage=data.message;
        }
      }
    );
    
  }
}
