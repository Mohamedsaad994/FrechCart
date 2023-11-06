import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path:'', canActivate:[authGuard], loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent), children:[
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'home', loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent), title:'Home'},
    {path:'cart', loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent), title:'Cart'},
    {path:'payment/:id', loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent), title:'Payment'},
    {path:'allorders', loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent), title:'AllOrders'},
    {path:'products', loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent), title:'Products'},
    {path:'details/:id', loadComponent:()=>import('./components/prod-details/prod-details.component').then((m)=>m.ProdDetailsComponent), title:'Details'},
    {path:'brands', loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent), title:'Brands'},
    {path:'categories', loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent), title:'Categories'},
    {path:'wishlist', loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent), title:'Categories'},
    {path:'categoryData/:id', loadComponent:()=>import('./components/categorydata/categorydata.component').then((m)=>m.CategorydataComponent), title:'Categories'}
  ]},


  {path:'', loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent), children:[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent), title:'Login'},
    {path:'forgetPassword', loadComponent:()=>import('./components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent), title:'ForgetPassword'},
    {path:'register', loadComponent:()=>import('./components/register/register.component').then((m)=>m.default), title:'Register'}
  ]},


  {path:'**', loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent), title: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
