import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProductsComponent} from './products/products.component';
import { AddProcductComponent } from './add-procduct/add-procduct.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [{
  path : 'login',
  component: LoginComponent
},
{
  path: '',
  component: ProductsComponent
},
{
  path: 'addProduct',
  component: AddProcductComponent
},
{
  path: 'detailsProduct',
  component: DetailsProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
