"use strict";(self.webpackChunkfrechcart=self.webpackChunkfrechcart||[]).push([[699],{3699:(d,n,a)=>{a.r(n),a.d(n,{CategorydataComponent:()=>o});var i=a(6814),t=a(4769),g=a(0),c=a(1120);function m(r,_){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5)(5,"h3"),t._uU(6),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("src",e.categoryData.image,t.LSH)("alt",e.categoryData.name),t.xp6(3),t.hij(" ",e.categoryData.name," ")}}let o=(()=>{class r{constructor(e,s){this._ProductService=e,this._ActivatedRoute=s,this.categoryId="",this.categoryData={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{e.get("id"),this.categoryId=e.get("id"),console.log(this.categoryId)}}),this._ProductService.getCategoryDetails(this.categoryId).subscribe({next:e=>{this.categoryData=e.data}})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(g.M),t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-categorydata"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto bg-main-light rounded shadow p-3 my-5",4,"ngIf"],[1,"w-75","mx-auto","bg-main-light","rounded","shadow","p-3","my-5"],[1,"row","align-items-center"],[1,"col-md-3"],[1,"w-100",3,"src","alt"],[1,"col-md-9"]],template:function(s,u){1&s&&t.YNc(0,m,7,3,"section",0),2&s&&t.Q6J("ngIf",u.categoryData._id)},dependencies:[i.ez,i.O5]})}return r})()},0:(d,n,a)=>{a.d(n,{M:()=>g});var i=a(4769),t=a(9862);let g=(()=>{class c{constructor(o){this._HttpClient=o}getProduct(o=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${o}`)}getCategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getCategoryDetails(o){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${o}`)}getProdDetails(o){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${o}`)}static#t=this.\u0275fac=function(r){return new(r||c)(i.LFG(t.eN))};static#e=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);