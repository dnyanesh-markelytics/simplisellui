import { EventEmitter, Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import {map} from 'rxjs/operators';
@Injectable()
export class ProductService{
  constructor(private httpService:HttpService){}
      getProducts(filter:any){
        return this.httpService.getDataWithParams(filter,'productsapi/index').pipe(
          map( response => {
            response.data.data.map(data=> data.profit = +data.profit) 
            return response;
         } ));
      }
      getPopularCategories(){
        return this.httpService.getDataWithParams({},'productsapi/popular_categories');
      }
      getStores(){
        return this.httpService.getDataWithParams({},'productsapi/stores');
      }
}