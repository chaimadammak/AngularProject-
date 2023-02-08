import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomeComponent } from './home/home.component';
import { NOTFoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  
  /*{path:'products', component : ProductsComponent},
  {path : '',redirectTo:'home',pathMatch:'full'},
  {path:'**' , component: NOTFoundComponent},*/
  /*{
    path:'home', component: HomeComponent , children: [
    {path:'products', component : ProductsComponent},
  ]
},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'**' , component: NOTFoundComponent},*/
  
    {path:'products', component : ProductsComponent},
    {path:'products/:id', component:DetailsProductComponent},
    {path:'home', component: HomeComponent , children: [
      // ...
    ]
  },
    {path : '',redirectTo:'home',pathMatch:'full'},
    {path:'**' , component: NOTFoundComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
