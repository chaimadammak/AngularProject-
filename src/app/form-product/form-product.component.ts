import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Core/Model/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product!: Product;

  constructor(private productService:ProductServiceService,private route:Router) { }

  ngOnInit(): void {
    this.product=new Product();
    
    
  }
  ajouter(){
    this.productService.addProduct(this.product);
    this.route.navigateByUrl('/products');

  }

  

}
