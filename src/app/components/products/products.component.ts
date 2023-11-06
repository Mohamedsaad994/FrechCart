import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interFaces/product';
import { RouterLink } from '@angular/router';
import { CuttxtPipe } from 'src/app/core/pipe/cuttxt.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttxtPipe, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private _ProductService:ProductService, private _Renderer2:Renderer2, private _CartService:CartService, private _ToastrService:ToastrService, private _WishlistService:WishlistService){}

  products:product[]=[];
  wishlistData:string[]=[]

  limitItems:number = 0;
  pageNum:number = 1;
  allItems:number = 0;
  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next:(response)=>{
        console.log('Products',response.data);
        this.products = response.data
        this.limitItems = response.metadata.limit
        this.pageNum = response.metadata.currentPage
        this.allItems = response.results
      }
    });

    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
        const newData = response.data.map((item:any)=> item._id)
        this.wishlistData = newData
      }
    })
  }

  pageChanged(event:any):void{
    this._ProductService.getProduct(event).subscribe({
      next:(response)=>{
        console.log('Products',response.data);
        this.products = response.data
        this.limitItems = response.metadata.limit
        this.pageNum = response.metadata.currentPage
        this.allItems = response.results
      }
    });
  }

  addProduct(id:any, element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element, 'disabled' , 'true')

    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this._Renderer2.removeAttribute(element, 'disabled')

        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element, 'disabled')
      }
    })
  }

  addToList(prodId:string):void{
    this._WishlistService.addToWishlist(prodId).subscribe({
      next:(response)=>{
        console.log(response.data.length)
        this._ToastrService.success(response.message)
        this.wishlistData = response.data

        this._WishlistService.wishListNumber.next(response.data.length)
      }
    })
  }


  removeItem(prodId:string):void{
    this._WishlistService.removeWishlist(prodId).subscribe({
      next:(response)=>{
        console.log(response)
        this.wishlistData = response.data
        this._WishlistService.wishListNumber.next(response.data.length)
      }
    })
  }
}
