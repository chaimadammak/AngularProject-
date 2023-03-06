import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Product } from '../Core/Model/product';
import { ConsumerProductsService } from '../services/consumer-products.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title : string ="Heyyy ! ";
  listProduct!:Product[];
  priceMax!:number;
  count!:number;

  constructor(private serviceProduct: ProductServiceService, private consumerProduct: ConsumerProductsService) { }

  ngOnInit(): void {
    //this.listProduct=this.serviceProduct.listProduct;
    this.consumerProduct.getProduct().subscribe({
      next: (data)=>  { this.listProduct=data ; 
      console.log(data);
      }
    })
    
    

    
  }
  buy(i:number){
    if(this.listProduct[i].quantity>0){
      this.listProduct[i].quantity--;

    }
    

  }
  like(i:number){
    this.listProduct[i].like++;
  }
  serach(){
    

  }
  getAlert(){
    this.count=this.serviceProduct.getNumberOf(this.listProduct,"quantity",0);
  }
 

}
