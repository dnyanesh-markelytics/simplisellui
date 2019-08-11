import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import {map} from 'rxjs/operators';
@Injectable()
export class ProfileService{
  constructor(private httpService:HttpService){}
      getProfits(){
        return this.httpService.getDataWithParams({},'profile/index');
      }

      getbankDetails(){
          return this.httpService.getData('profile/bank_details');
      }

      submitBankDetails(obj){
        return this.httpService.postData(obj,'profile/bank_details');
      }

      getUserDetails(){
        return this.httpService.getData('profile/user_details');
      }
      onSubmitUserDetails(obj){
        return this.httpService.postData(obj,'profile/user_details');
      }

      getPayments(){
        return this.httpService.getDataWithParams({},'profile/payment_details');
      }
      getMissingProfits(){
        return this.httpService.getDataWithParams({},'profile/missing_profits');
      }

      getStoreListing(){
        return this.httpService.getData('profile/stores');
      }

      submitMissingProfits(obj){
        return this.httpService.postData(obj,'profile/missing_profit_details');
      }
      getProductListing(store_id){
        return this.httpService.getDataWithParams({'store_id':store_id},'profile/product_list');
      }
      
}