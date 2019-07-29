import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit , OnDestroy{

  constructor(private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) { }

  sub:Subscription;
  categorySub:Subscription;
  stores:any=[];
  categories:any=[];
  filter:any=[];
  storeParams;

  showCategories:boolean;
  showStores:boolean;
  showRelCategory:boolean;
  showTrending:boolean;

  ngOnInit() {
    this.route.queryParams.subscribe(param=>{
      if(param.store_id != undefined){
        this.showStores = true;
      }
    });
    this.sub = this.productService.getStores().subscribe(store=>this.stores = store.data);
    this.categorySub = this.productService.getPopularCategories().subscribe(category => this.categories=category.data);
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
    this.categorySub.unsubscribe();
  }
  openOptions(box:number){
    switch(box){
      case 1:
        this.showTrending = !this.showTrending;
      break;
      case 2:
        this.showCategories = !this.showCategories;
      break;
      case 3:
        this.showStores = !this.showStores;
      break;
      case 4:
        this.showRelCategory = !this.showRelCategory;
      break;
    }
  }
  searchProducts(event,store){
    if(event){
      this.filter.push(+store.store_id);
    }else{
      this.filter = this.filter.filter((value) =>{
        return value != store.store_id;
      });
    }
    // var params;
    if(this.filter.length > 0){
      this.storeParams = {store_id:this.filter.join()};
      this.router.navigate(['/products'],{relativeTo:this.route,queryParams:this.storeParams,queryParamsHandling: 'merge'});
    }else{
      this.storeParams='';
      var paramData;
      this.route.queryParams.subscribe(param=>{
        paramData = Object.assign({},param);
        paramData['store_id'] = undefined;
      }); 
      this.router.navigate(['/products'],{relativeTo:this.route,queryParams:paramData,queryParamsHandling: 'merge'});
    }
    console.log(this.storeParams);
  }
  searchProductsByCategory(category_id){
    var params = {category_id:category_id};
    this.router.navigate(['/products'],{relativeTo:this.route,queryParams:params,queryParamsHandling: 'merge'});
  }
}
