"use strict";(self.webpackChunkfrechcart=self.webpackChunkfrechcart||[]).push([[290],{5290:(v,d,s)=>{s.r(d),s.d(d,{CartComponent:()=>x});var l=s(6814),p=s(1120),t=s(4769),C=s(6286);function _(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12)(4,"div",13)(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",5),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",4,15),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.MAs(11),m=t.oxw(2);return t.KtG(m.removeItem(o.product._id,a))}),t._UZ(12,"i",16),t._uU(13," Remove"),t.qZA()(),t.TgZ(14,"div",17)(15,"button",18,19),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.MAs(16),m=t.MAs(21),g=t.oxw(2);return t.KtG(g.changeCount(o.product._id,o.count+1,a,m))}),t._uU(17,"+"),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",18,20),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.MAs(16),m=t.MAs(21),g=t.oxw(2);return t.KtG(g.changeCount(o.product._id,o.count-1,a,m))}),t._uU(22,"-"),t.qZA()()()()}if(2&n){const e=h.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.hij(" ",e.product.title," "),t.xp6(2),t.hij(" ",t.xi3(9,5,e.price,"EGP ")," "),t.xp6(11),t.hij(" ",e.count," ")}}const b=function(n){return["/payment",n]};function c(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h2"),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.removeCart())}),t._uU(5,"Clear Cart"),t.qZA()(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,_,23,8,"div",6),t.TgZ(10,"button",7),t._uU(11," Online Payment "),t._UZ(12,"img",8),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(7),t.hij("Total Price: ",t.xi3(8,3,e.cartDetails.totalCartPrice,"EGP ")," "),t.xp6(2),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,b,e.cartDetails._id))}}function u(n,h){1&n&&(t.TgZ(0,"h2",21),t._uU(1,"Your Cart Is Empty..."),t.qZA())}let x=(()=>{class n{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null}ngOnInit(){this._CartService.getUserCart().subscribe({next:e=>{console.log(e.data),this.cartDetails=e.data,this.cartDetails.products<=0&&(this.cartDetails=null)}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:i=>{console.log(i),this.cartDetails=i.data,this._CartService.cartNumber.next(i.numOfCartItems),this.cartDetails.products<=0&&(this.cartDetails=null)}})}changeCount(e,r,i,o){r>=1&&(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.changeCountCartItem(e,r).subscribe({next:a=>{console.log(a),this.cartDetails=a.data},error:a=>{this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(o,"disabled","true")}}))}removeCart(){this._CartService.clearCart().subscribe({next:e=>{console.log(e),this.cartDetails=e.data,this._CartService.cartNumber.next(0)}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(C.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 rounded shadow m-auto p-4 my-4 bg-main-light",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","rounded","shadow","m-auto","p-4","my-4","bg-main-light"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-danger",3,"click"],[1,"text-main"],["class","row py-2 border-bottom align-items-center",4,"ngFor","ngForOf"],[1,"btn","main-btn","mt-5",3,"routerLink"],["src","./assets/imgs/visa-1.svg","alt",""],[1,"row","py-2","border-bottom","align-items-center"],[1,"col-md-1","image"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"info"],[1,"h6"],["removeBtn",""],[1,"fas","fa-trash-can"],[1,"btns"],[1,"btn","btn-small","border-success",3,"click"],["btn1",""],["btn2",""],[1,"text-center","mt-5","py-1"]],template:function(r,i){if(1&r&&(t.YNc(0,c,13,8,"section",0),t.YNc(1,u,2,0,"ng-template",null,1,t.W1O)),2&r){const o=t.MAs(2);t.Q6J("ngIf",i.cartDetails)("ngIfElse",o)}},dependencies:[l.ez,l.sg,l.O5,l.H9,p.rH],styles:[".btns[_ngcontent-%COMP%]{width:15%}.info[_ngcontent-%COMP%]{width:85%}@media (min-width: 576px) and (max-width: 767.98px){.btns[_ngcontent-%COMP%]{width:25%}.info[_ngcontent-%COMP%]{width:75%;padding:25px 0}.image[_ngcontent-%COMP%]{width:50%;margin:30px auto auto}}@media (max-width: 575.98px){.btns[_ngcontent-%COMP%]{width:30%}.info[_ngcontent-%COMP%]{width:70%;padding:25px 0}.image[_ngcontent-%COMP%]{width:50%;margin:30px auto auto}}"]})}return n})()},6286:(v,d,s)=>{s.d(d,{N:()=>C});var l=s(5619),p=s(4769),t=s(9862);let C=(()=>{class _{constructor(c){this._HttpClient=c,this.cartNumber=new l.X(0)}addToCart(c){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:c})}getUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeCartItem(c){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${c}`)}changeCountCartItem(c,u){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${c}`,{count:u})}clearCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")}checkOut(c,u){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${c}?url=http://localhost:4200`,{shippingAddress:u})}static#t=this.\u0275fac=function(u){return new(u||_)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);