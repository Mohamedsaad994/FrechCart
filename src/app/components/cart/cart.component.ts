import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService, private _Renderer2:Renderer2){}

  cartDetails:any=null


  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.cartDetails=response.data;
        if(this.cartDetails.products <= 0){
          this.cartDetails = null
        }
      }
    })
  }

  removeItem(id:string, element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element, 'disabled', 'true')

    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.cartDetails=response.data;

        this._CartService.cartNumber.next(response.numOfCartItems)
        if(this.cartDetails.products <= 0){
          this.cartDetails = null
        }
      }
    })
  }


  changeCount(id:string, count:number, ele1:HTMLButtonElement, ele2:HTMLButtonElement):void{

    if(count >= 1){
      this._Renderer2.setAttribute(ele1, 'disabled', 'true')
      this._Renderer2.setAttribute(ele2, 'disabled', 'true')
      this._CartService.changeCountCartItem(id, count).subscribe({
        next:(response)=>{
          console.log(response);
          this.cartDetails=response.data
        },
        error:(err)=>{
          this._Renderer2.setAttribute(ele1, 'disabled', 'true')
          this._Renderer2.setAttribute(ele2, 'disabled', 'true')
        }
      })
    }

  }

  removeCart():void{
    this._CartService.clearCart().subscribe({
      next:(response)=>{
        console.log(response);
        this.cartDetails=response.data;
        this._CartService.cartNumber.next(0)
      }
    })
  }
}
