import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }
  isSuccess:boolean;
  isSuccessOTP:boolean;
  isFormSubmittedOTP:boolean=false;
  isFormSubmitted:boolean=false;
  isSuccessRetry:boolean;
  isFormSubmittedRetry:boolean=false;
  contact_no:number;
  errorMessage:string='';

  // form fields
  name;
  email_id;
  password;
  otp;

  ngOnInit() {
  }
  onSubmitSignUp(f){
    this.errorMessage = '';
    this.authService.signUp(f.value).subscribe((data)=>{
      this.isSuccess = data.success;
      if(this.isSuccess){
        this.contact_no = f.value.contact_no;
      }else{
        this.errorMessage = data.message;
      }
      this.isFormSubmitted = data.success;
    });
  }

  onSubmitOTP(f){
    console.log(f.value);
    this.errorMessage = '';
    this.authService.verifyOTP(f.value).subscribe((data)=>{
      this.isSuccessOTP = data.success;
      if(this.isSuccessOTP){
        this.router.navigate(['/login']);
      }else{
        this.errorMessage = data.message;
      }
      this.isFormSubmittedOTP = data.success;
    });
  }
  onRetryOTP(f){
    this.authService.signUp(f.value).subscribe((data)=>{
      this.isSuccessRetry = data.success;
      this.isFormSubmittedRetry = data.success;
    });
  }
  checkMobileNumber(mobile_number,form){
    if(mobile_number != '' && mobile_number.toString().length != 10){
      form.form.controls['contact_no'].setErrors({'maxlength':true});
    }
  }
}
