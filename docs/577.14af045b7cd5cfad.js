"use strict";(self.webpackChunkfrechcart=self.webpackChunkfrechcart||[]).push([[577],{6286:(d,u,o)=>{o.d(u,{N:()=>g});var m=o(5619),r=o(4769),t=o(9862);let g=(()=>{class l{constructor(s){this._HttpClient=s,this.cartNumber=new m.X(0)}addToCart(s){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:s})}getUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeCartItem(s){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${s}`)}changeCountCartItem(s,c){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${s}`,{count:c})}clearCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")}checkOut(s,c){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${s}?url=http://localhost:4200`,{shippingAddress:c})}static#t=this.\u0275fac=function(c){return new(c||l)(r.LFG(t.eN))};static#e=this.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},8577:(d,u,o)=>{o.r(u),o.d(u,{BlankLayoutComponent:()=>f});var m=o(6814),r=o(1120),t=o(4769),g=o(6286),l=o(9196);let h=(()=>{class i{constructor(e,n,a){this._Router=e,this._CartService=n,this._WishlistService=a,this.numOfCart=0,this.numOfWishlist=0}ngOnInit(){this._CartService.cartNumber.subscribe({next:e=>{console.log(e),this.numOfCart=e}}),this._CartService.getUserCart().subscribe({next:e=>{this.numOfCart=e.numOfCartItems}}),this._WishlistService.wishListNumber.subscribe({next:e=>{this.numOfWishlist=e}}),this._WishlistService.getWishlist().subscribe({next:e=>{this.numOfWishlist=e.data.length}})}signOut(){localStorage.removeItem("etoken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(r.F0),t.Y36(g.N),t.Y36(l.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-nav-blank"]],standalone:!0,features:[t.jDz],decls:48,vars:4,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","fixed-top"],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/imgs/freshcart-logo.svg","alt","Logo"],["routerLink","/cart",1,"nav-link","position-relative","cart-sm","me-auto"],[1,"fas","fa-cart-shopping","text-main","fa-2x","ms-2"],[1,"badge","bg-success-subtle","position-absolute","text-dark","num"],["routerLink","/wishlist",1,"nav-link","position-relative","wishlist-sm","me-5"],[1,"fa-solid","fa-heart","text-danger","fa-2x","ms-2"],[1,"badge","bg-danger-subtle","position-absolute","text-dark","num"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0","align-items-center","list"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],[1,"nav-item","cart"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"badge","bg-success-subtle","position-absolute","top-0","end-0","text-dark","num"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-center","list"],[1,"nav-item","me-4","wishlist"],["routerLink","/wishlist",1,"nav-link","position-relative"],[1,"badge","bg-danger-subtle","position-absolute","top-0","end-0","text-dark"],[1,"nav-item","d-flex","gap-3","me-3"],[1,"fab","fa-facebook"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin"],[1,"fab","fa-instagram"],[1,"fab","fa-tiktok"],["role","button",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"a",4),t._UZ(5,"i",5),t.TgZ(6,"span",6),t._uU(7),t.qZA()(),t.TgZ(8,"a",7),t._UZ(9,"i",8),t.TgZ(10,"span",9),t._uU(11),t.qZA()(),t.TgZ(12,"button",10),t._UZ(13,"span",11),t.qZA(),t.TgZ(14,"div",12)(15,"ul",13)(16,"li",14)(17,"a",15),t._uU(18,"Home"),t.qZA()(),t.TgZ(19,"li",14)(20,"a",16),t._uU(21,"Products"),t.qZA()(),t.TgZ(22,"li",14)(23,"a",17),t._uU(24,"Categories"),t.qZA()(),t.TgZ(25,"li",14)(26,"a",18),t._uU(27,"Brands"),t.qZA()(),t.TgZ(28,"li",19)(29,"a",20),t._UZ(30,"i",5),t.TgZ(31,"span",21),t._uU(32),t.qZA()()()(),t.TgZ(33,"ul",22)(34,"li",23)(35,"a",24),t._UZ(36,"i",8),t.TgZ(37,"span",25),t._uU(38),t.qZA()()(),t.TgZ(39,"li",26),t._UZ(40,"i",27)(41,"i",28)(42,"i",29)(43,"i",30)(44,"i",31),t.qZA(),t.TgZ(45,"li",14)(46,"span",32),t.NdJ("click",function(){return a.signOut()}),t._uU(47,"Sign Out"),t.qZA()()()()()()),2&n&&(t.xp6(7),t.hij(" ",a.numOfCart," "),t.xp6(4),t.hij(" ",a.numOfWishlist," "),t.xp6(21),t.hij(" ",a.numOfCart," "),t.xp6(6),t.hij(" ",a.numOfWishlist," "))},dependencies:[m.ez,r.rH,r.Od],styles:["@media (max-width: 991.98px){.cart[_ngcontent-%COMP%], .wishlist[_ngcontent-%COMP%]{display:none}.num[_ngcontent-%COMP%]{bottom:20px;left:30px}.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:30px!important}.active-link[_ngcontent-%COMP%]{padding:5px 10px}}@media (min-width: 992px){.cart-sm[_ngcontent-%COMP%], .wishlist-sm[_ngcontent-%COMP%]{display:none}}"]})}return i})(),s=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:23,vars:0,consts:[[1,"bg-main-light","py-4"],[1,"container"],[1,"text-muted","font-sm"],[1,"d-flex","gap-3"],["type","email","placeholder","Email...",1,"form-control"],[1,"main-btn","flex-shrink-0"],[1,"d-flex","justify-content-between","pt-5","footer"],[1,"d-flex","align-items-center"],[1,"mt-2","font-sm","fw-bold"],["src","./assets/imgs/masterCard.png","alt","",1,"pay-img","ms-2"],["src","./assets/imgs/download.png","alt","",1,"pay-img","ms-2"],["src","./assets/imgs/paypal-icon.png","alt","",1,"pay-img","ms-2"],[1,"mt-3","me-3","font-sm","fw-bold"],["src","./assets/imgs/google-play-logo-1518163351.png","alt","",1,"store-img"],["src","./assets/imgs/apple-app-store-logo.jpg","alt","",1,"store-img"]],template:function(n,a){1&n&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"h3"),t._uU(3,"Get the FrechCart App"),t.qZA(),t.TgZ(4,"p",2),t._uU(5,"We will send you alink, open it on your phone to download the app."),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"input",4),t.TgZ(8,"button",5),t._uU(9,"Share App Link"),t.qZA()(),t.TgZ(10,"div",6)(11,"div",7)(12,"p",8),t._uU(13,"Payment Partners"),t.qZA(),t._UZ(14,"img",9)(15,"img",10)(16,"img",11),t.qZA(),t.TgZ(17,"div",7)(18,"p",12),t._uU(19,"Get deliveries With FrechCart"),t.qZA(),t._UZ(20,"img",13)(21,"img",14),t.qZA()(),t._UZ(22,"hr"),t.qZA()())},dependencies:[m.ez],styles:["[_nghost-%COMP%]{margin-top:auto}.pay-img[_ngcontent-%COMP%]{width:40px;display:block}.store-img[_ngcontent-%COMP%]{width:100px;display:block}hr[_ngcontent-%COMP%]{color:#ccc}@media (max-width: 767.98px){.footer[_ngcontent-%COMP%]{flex-direction:column;gap:20px}}"]})}return i})();const c=["btn"];let f=(()=>{class i{constructor(e){this._Renderer2=e}onScroll(){scrollY>300?this._Renderer2.removeClass(this.btnElement.nativeElement,"opacity-0"):this._Renderer2.addClass(this.btnElement.nativeElement,"opacity-0")}goToUp(e){window.scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-blank-layout"]],viewQuery:function(n,a){if(1&n&&t.Gf(c,5),2&n){let p;t.iGM(p=t.CRH())&&(a.btnElement=p.first)}},hostBindings:function(n,a){1&n&&t.NdJ("scroll",function(){return a.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:7,vars:0,consts:[[1,"container-fluid"],[1,"btn-up","opacity-0",3,"click"],["btn",""],[1,"fa-solid","fa-angle-up"]],template:function(n,a){if(1&n){const p=t.EpF();t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1,2),t.NdJ("click",function(){t.CHM(p);const v=t.MAs(5);return t.KtG(a.goToUp(v))}),t._UZ(6,"i",3),t.qZA()}},dependencies:[m.ez,h,r.lC,s],styles:["[_nghost-%COMP%]{display:flex;min-height:100vh;flex-direction:column}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.btn-up[_ngcontent-%COMP%]{width:40px;height:40px;color:#fff;background-color:#0aad0a;border-radius:50%;position:fixed;bottom:20px;right:20px;border:none;z-index:999;transition:.5s}"]})}return i})()}}]);