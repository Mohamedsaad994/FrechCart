import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interFaces/product';
import { CuttxtPipe } from 'src/app/core/pipe/cuttxt.pipe';
import { category } from 'src/app/core/interFaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttxtPipe, CarouselModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductService:ProductService, private _CartService:CartService, private _ToastrService:ToastrService, private _Renderer2:Renderer2, private _WishlistService:WishlistService){}

  term:string=''
  products:product[]=[];
  categories:category[]=[];
  wishlistData:string[]=[]


  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next:(response)=>{
        console.log('Products',response.data);
        this.products = response.data
      }
    });

    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        console.log('Categories',response.data);
        this.categories = response.data
      }
    })

    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
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

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    nav: true
  }

  slideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    nav: true
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
