import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { PROFIT_STATUS } from '../../shared/enum'
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private profileService:ProfileService) { }
  showWthLog:boolean;
  showLogs:boolean=true;
  payments:any=[];
  orderLog:any=[];
  PROFIT_STATUS:any;
  ngOnInit() {
    this.PROFIT_STATUS = PROFIT_STATUS
    this.profileService.getPayments().subscribe(data => {
      data.data.map(payment => {
        if(payment.status == 3){
          this.payments.push(payment) ;
        }else{
          this.orderLog.push( payment);
        }
      });
    });
  }
}
