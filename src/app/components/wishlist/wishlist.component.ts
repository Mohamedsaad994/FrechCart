import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { product } from 'src/app/core/interFaces/product';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuttxtPipe } from 'src/app/core/pipe/cuttxt.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttxtPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{

  constructor(private _WishlistService:WishlistService, private _ToastrService:ToastrService, private _Renderer2:Renderer2, private _CartService:CartService){}

  products:product[]=[];
  wishlistData:string[]=[]

  ngOnInit(): void {
    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
        console.log(response)
        this.products = response.data
        const newData = response.data.map((item:any)=> item._id)
        this.wishlistData = newData
      }
    })

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
        console.log(response.data)
        this._ToastrService.success(response.message)
        this.wishlistData = response.data
      }
    })
  }

  removeItem(prodId:string):void{
    this._WishlistService.removeWishlist(prodId).subscribe({
      next:(response)=>{
        console.log(response)
        this.wishlistData = response.data
        this._WishlistService.wishListNumber.next(response.data.length)

        const newProductData = this.products.filter((item)=> this.wishlistData.includes(item._id));

        this.products = newProductData
  }
})
}
}
