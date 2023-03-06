import { Injectable } from '@angular/core';
import { Product } from '../Core/Model/product';

@Injectable({
  providedIn: 'root' //peut etre injecte dans toute l application et contient une seule instance 
})
export class ProductServiceService {
  i!:BigInteger;
 listProduct:Product[]=   [
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];

  constructor() { }
  addProduct(product:Product){
    this.listProduct.push(product);

  }
  getNumberOf(list:any,criteria:string,value:any):number {
    let count=0;
    for (let i = 0; i < list.length; i++) {
      if (list[i][criteria] === value) {
        count++;
      }
      
      
    }
    return count;
  }
  
}
