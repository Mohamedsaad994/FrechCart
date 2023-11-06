import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{

  constructor(private _Router:Router, private _CartService:CartService,private _WishlistService:WishlistService){}

  numOfCart:number=0
  numOfWishlist:number=0


  ngOnInit(): void {


    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        console.log(data)
        this.numOfCart=data
      }
    })

    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.numOfCart=response.numOfCartItems
      }
    })


    this._WishlistService.wishListNumber.subscribe({
      next:(data)=>{
        this.numOfWishlist = data
      }
    })

    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
        this.numOfWishlist = response.data.length

      }
    })
  }


  signOut():void{
    localStorage.removeItem('etoken');
    this._Router.navigate(['/login'])
  }

}
