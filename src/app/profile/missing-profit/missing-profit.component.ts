import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { PROFIT_STATUS } from '../../shared/enum'

@Component({
  selector: 'app-missing-profit',
  templateUrl: './missing-profit.component.html',
  styleUrls: ['./missing-profit.component.css']
})
export class MissingProfitComponent implements OnInit {

  constructor(private profileService:ProfileService) { }
  showMissingProfitForm:boolean=true;
  showRequest:boolean;
  missingFormData:any = [];
  PROFIT_STATUS:any;
  requests:any=[];
  stores:any=[];
  products:any=[];
  missingFrom = new FormData();
  isImageExist:boolean = false;
  url;
  errorMessage:string;

  formDate = new Date();
  dd:any;
  mm:any;
  yyyy:any;


  ngOnInit() {
    this.PROFIT_STATUS = PROFIT_STATUS
    this.profileService.getStoreListing().subscribe(data => {
      this.stores = data.data; 
    });
    this.profileService.getMissingProfits().subscribe(data => {
      this.requests = data.data;
    });

    
    this.dd = this.formDate.getDate() - 10;
    this.mm = this.formDate.getMonth()+1; //January is 0!
    this.yyyy = this.formDate.getFullYear();
    if(this.dd<10){
        this.dd='0'+this.dd
    } 
    if(this.mm<10){
        this.mm='0'+this.mm
    } 
    document.getElementById("order_date").setAttribute("min", this.yyyy+'-'+this.mm+'-'+this.dd);
    document.getElementById("order_date").setAttribute("max", this.yyyy+'-'+this.mm+'-'+this.formDate.getDate());
  }

  onSubmitMissingForm(f){
    this.errorMessage = '';
    this.missingFrom.set('order_date',f.value.order_date);
    this.missingFrom.set('store_id',f.value.store_id);
    this.missingFrom.set('transaction_id',f.value.transaction_id);
    this.missingFrom.set('sell_amount',f.value.sell_amount);
    this.missingFrom.set('product_id',f.value.product_id);
    this.missingFrom.set('comments',f.value.comments);
    
    this.profileService.submitMissingProfits(this.missingFrom).subscribe(data => {
      if(!data.success){
        this.errorMessage = data.message;
      }else{
        f.reset();
      }
    });
  }

  detectFiles1(event) {
    var self = this;
    let file = event.target.files;
    if (file) {
      self.missingFrom.set('file', file[0]);  
      // self.missingFormData.file = file[0];
    }else{
      return false;
    }
    this.isImageExist = false;
  }

  getProductListing(store_id){
    this.profileService.getProductListing(store_id).subscribe(data => {
      this.products = data.data; 
    });
  }
}
