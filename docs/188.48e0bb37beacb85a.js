"use strict";(self.webpackChunkfrechcart=self.webpackChunkfrechcart||[]).push([[188],{2188:(y,f,c)=>{c.r(f),c.d(f,{ProductsComponent:()=>K});var p=c(6814),x=c(1120),P=c(7368),e=c(4769);function h(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function u(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function l(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,h,4,2,"a",10),e.YNc(2,u,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function m(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))})("click",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function w(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function M(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,m,6,5,"a",10),e.YNc(2,w,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function Z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function N(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,Z,4,2,"a",10),e.YNc(2,D,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function E(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,l,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,M,3,6,"li",7),e.YNc(5,N,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class L{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const S=Number.MAX_SAFE_INTEGER;let O=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let C=n.id||this.service.defaultId();return this.state[C]?this.state[C].slice:t}let g,d,s=n.totalItems&&n.totalItems!==t.length,r=this.createInstance(t,n),o=r.id,_=r.itemsPerPage,b=this.service.register(r);if(!s&&t instanceof Array){if(_=+_||S,g=(r.currentPage-1)*_,d=g+_,this.stateIsIdentical(o,t,g,d))return this.state[o].slice;{let I=t.slice(g,d);return this.saveState(o,t,I,g,d),this.service.change.emit(o),I}}return b&&this.service.change.emit(o),this.saveState(o,t,t,g,d),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const s=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<s.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${s.join(", ")}`)}saveState(t,n,s,r,o){this.state[t]={collection:n,size:n.length,slice:s,start:r,end:o}}stateIsIdentical(t,n,s,r){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==s||o.end!==r)&&o.slice.every((d,_)=>d===n[s+_])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),F=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(s=>{this.id===s&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,s,r){r=+r;let o=[];const g=Math.max(Math.ceil(s/n),1),d=Math.ceil(r/2),_=t<=d,b=g-d<t,C=!_&&!b;let I=r<g,v=1;for(;v<=g&&v<=r;){let k,A=this.calculatePageNumber(v,t,r,g);k=I&&(2===v&&(C||b)||v===r-1&&(C||_))?"...":A,o.push({label:k,value:A}),v++}return o}calculatePageNumber(t,n,s,r){let o=Math.ceil(s/2);return t===s?r:1===t?t:s<r?r-o<n?r-s+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function T(i){return!!i&&"false"!==i}let H=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=T(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=T(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=T(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return n.pageChange.emit(r)})("pageBoundsCorrection",function(r){return n.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,E,6,8,"ul",3),e.qZA()()),2&t){const s=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&s.pages.length<=1))}},dependencies:[F,p.O5,p.sg,p.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[L],imports:[[p.ez]]}),i})();var U=c(0),R=c(6286),J=c(2425),Y=c(9196);function z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",19),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.addToList(s._id))}),e.qZA()}}function j(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",20),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.removeItem(s._id))}),e.qZA()}}const q=function(i){return["/details",i]};function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div")(2,"div",8),e.YNc(3,z,1,0,"i",9),e.YNc(4,j,1,0,"i",10),e.TgZ(5,"div",11),e._UZ(6,"img",12),e.TgZ(7,"h4",13),e._uU(8),e.qZA(),e.TgZ(9,"h3",14),e._uU(10),e.ALo(11,"cuttxt"),e.qZA(),e.TgZ(12,"div",15)(13,"span"),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"span"),e._UZ(17,"i",16),e._uU(18),e.qZA()()(),e.TgZ(19,"button",17,18),e.NdJ("click",function(){const r=e.CHM(t).$implicit,o=e.MAs(20),g=e.oxw(2);return e.KtG(g.addProduct(r._id,o))}),e._uU(21,"+ Add To Cart"),e.qZA()()()()}if(2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(3),e.Q6J("ngIf",!n.wishlistData.includes(t._id)),e.xp6(1),e.Q6J("ngIf",n.wishlistData.includes(t._id)),e.xp6(1),e.Q6J("routerLink",e.VKq(16,q,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH)("alt",t.title)("title",t.title),e.xp6(2),e.hij(" ",t.category.name," "),e.xp6(2),e.hij(" ",e.xi3(11,10,t.title,2)," "),e.xp6(4),e.hij(" ",e.xi3(15,13,t.price,"EGP")," "),e.xp6(4),e.hij(" ",t.ratingsAverage," ")}}const G=function(i,a,t){return{id:"productPaginate",itemsPerPage:i,currentPage:a,totalItems:t}};function $(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"section",1)(1,"h2",2),e._uU(2,"All Products"),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,Q,22,18,"div",4),e.ALo(5,"paginate"),e.qZA(),e.TgZ(6,"div",5)(7,"pagination-controls",6),e.NdJ("pageChange",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))})("pageBoundsCorrection",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.xi3(5,5,t.products,e.kEZ(8,G,t.limitItems,t.pageNum,t.allItems))),e.xp6(3),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let K=(()=>{class i{constructor(t,n,s,r,o){this._ProductService=t,this._Renderer2=n,this._CartService=s,this._ToastrService=r,this._WishlistService=o,this.products=[],this.wishlistData=[],this.limitItems=0,this.pageNum=1,this.allItems=0}ngOnInit(){this._ProductService.getProduct().subscribe({next:t=>{console.log("Products",t.data),this.products=t.data,this.limitItems=t.metadata.limit,this.pageNum=t.metadata.currentPage,this.allItems=t.results}}),this._WishlistService.getWishlist().subscribe({next:t=>{const n=t.data.map(s=>s._id);this.wishlistData=n}})}pageChanged(t){this._ProductService.getProduct(t).subscribe({next:n=>{console.log("Products",n.data),this.products=n.data,this.limitItems=n.metadata.limit,this.pageNum=n.metadata.currentPage,this.allItems=n.results}})}addProduct(t,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addToCart(t).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(n,"disabled")}})}addToList(t){this._WishlistService.addToWishlist(t).subscribe({next:n=>{console.log(n.data.length),this._ToastrService.success(n.message),this.wishlistData=n.data,this._WishlistService.wishListNumber.next(n.data.length)}})}removeItem(t){this._WishlistService.removeWishlist(t).subscribe({next:n=>{console.log(n),this.wishlistData=n.data,this._WishlistService.wishListNumber.next(n.data.length)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(U.M),e.Y36(e.Qsj),e.Y36(R.N),e.Y36(J._W),e.Y36(Y.M))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","py-5",4,"ngIf"],[1,"py-5"],[1,"py-4","text-center"],[1,"row","justify-content-center","g-4","section"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","my-5"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],["role","button",1,"product"],["class","fa-regular fa-heart text-danger heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart text-danger heart",3,"click",4,"ngIf"],[1,"info",3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"h6","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-content-center","small"],[1,"fas","fa-star","rating-color"],[1,"main-btn","py-1","mt-2","w-100",3,"click"],["addBtn",""],[1,"fa-regular","fa-heart","text-danger","heart",3,"click"],[1,"fa-solid","fa-heart","text-danger","heart",3,"click"]],template:function(n,s){1&n&&e.YNc(0,$,8,12,"section",0),2&n&&e.Q6J("ngIf",s.products.length>0)},dependencies:[p.ez,p.sg,p.O5,p.H9,x.rH,P.G,B,O,H],styles:[".product[_ngcontent-%COMP%]{overflow:hidden}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translatey(150%);opacity:0;transition:.5s}.product[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}@media (min-width: 576px) and (max-width: 767.98px){.section[_ngcontent-%COMP%]{width:75%;margin:auto}}@media (max-width: 575.98px){.section[_ngcontent-%COMP%]{width:60%;margin:auto}}"]})}return i})()},6286:(y,f,c)=>{c.d(f,{N:()=>e});var p=c(5619),x=c(4769),P=c(9862);let e=(()=>{class h{constructor(l){this._HttpClient=l,this.cartNumber=new p.X(0)}addToCart(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:l})}getUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeCartItem(l){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${l}`)}changeCountCartItem(l,m){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${l}`,{count:m})}clearCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")}checkOut(l,m){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${l}?url=http://localhost:4200`,{shippingAddress:m})}static#e=this.\u0275fac=function(m){return new(m||h)(x.LFG(P.eN))};static#t=this.\u0275prov=x.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},0:(y,f,c)=>{c.d(f,{M:()=>P});var p=c(4769),x=c(9862);let P=(()=>{class e{constructor(u){this._HttpClient=u}getProduct(u=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${u}`)}getCategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getCategoryDetails(u){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${u}`)}getProdDetails(u){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${u}`)}static#e=this.\u0275fac=function(l){return new(l||e)(p.LFG(x.eN))};static#t=this.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);