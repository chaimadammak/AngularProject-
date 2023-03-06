import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Core/Model/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  id!: number;
  list!:Product[];
  constructor(private route:ActivatedRoute , private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.list=this.productService.listProduct;

  }

}
