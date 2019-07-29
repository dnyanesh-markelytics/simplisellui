import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute,
    private productService:ProductService) { }
  sub:Subscription;
  filter:any=[];
  isavailable:boolean;
  products:any=[];
  order: string = 'profit';
  orderBy: boolean=true;
  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params =>{
      this.filter = params;
      this.productService.getProducts(this.filter).subscribe(product =>{
        this.isavailable = product.success;
        this.products = product.data.data;
      });
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  sortOnPrice(order:string,orderBy:boolean){
    this.order = order;
    this.orderBy = orderBy;
  }
}