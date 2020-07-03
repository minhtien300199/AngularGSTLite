import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProductsComponent} from './products/products.component';
import { AddProcductComponent } from './add-procduct/add-procduct.component';

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

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
