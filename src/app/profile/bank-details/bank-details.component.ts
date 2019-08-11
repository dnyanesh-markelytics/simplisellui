import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit, OnDestroy {

  constructor(private profileService:ProfileService) { }
  bankDetails:any=[];
  bankSubscription:Subscription;
  ngOnInit() {
    this.bankSubscription = this.profileService.getbankDetails().subscribe(data => {
      this.bankDetails = data.data;
      console.log(this.bankDetails);
    });
  }

  onSubmitBankDetail(f){
    this.profileService.submitBankDetails(f.value).subscribe((data)=>{
      
    })
  }
  ngOnDestroy(){
    this.bankSubscription.unsubscribe();
  }
}
