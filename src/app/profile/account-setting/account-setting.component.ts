import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  constructor(private profileService:ProfileService) { }

  userDetails:any=[];
  userdata:any=[];
  userSubscription:Subscription;
  errorMessage:string;
  successMessage:string;
  userformSubmit:boolean;
  resetformSubmit:boolean;

  ngOnInit() {
    this.userSubscription = this.profileService.getUserDetails().subscribe(data => {
      this.userDetails = data.data;
      this.userdata.user_id = this.userDetails.user_id;
    });
  }

  onSubmituserDetail(f){
    this.userformSubmit = true;
    this.resetformSubmit = false;
    this.successMessage = this.errorMessage = '';
    this.profileService.onSubmitUserDetails(f.value).subscribe((data)=>{
      if(data.success){
        this.successMessage = data.message;
      }else{
        this.errorMessage = data.message;
      }
    });
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  resetPassword(f){
    this.resetformSubmit = true;
    this.userformSubmit = false;
    this.successMessage = this.errorMessage = '';
    this.profileService.onSubmitUserDetails(f.value).subscribe((data)=>{
      if(data.success){
        f.reset();
        this.successMessage = 'Password set successfully';
      }else{
        this.errorMessage = data.message;
      }
    });
  }
}
