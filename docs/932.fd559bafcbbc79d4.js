"use strict";(self.webpackChunkfrechcart=self.webpackChunkfrechcart||[]).push([[932],{6666:(x,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>w});var _=l(6814),i=l(95),u=l(1120),n=l(4769),p=l(304);function d(e,s){1&e&&(n.TgZ(0,"p"),n._uU(1,"*Email is Requierd"),n.qZA())}function c(e,s){1&e&&(n.TgZ(0,"p"),n._uU(1,"*Email is Invalid"),n.qZA())}function f(e,s){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,d,2,0,"p",11),n.YNc(2,c,2,0,"p",11),n.qZA()),2&e){const r=n.oxw();let t,o;n.xp6(1),n.Q6J("ngIf",null==(t=r.loginForm.get("email"))?null:t.getError("required")),n.xp6(1),n.Q6J("ngIf",null==(o=r.loginForm.get("email"))?null:o.getError("email"))}}function h(e,s){1&e&&(n.TgZ(0,"p"),n._uU(1,"*password is Requierd"),n.qZA())}function Z(e,s){1&e&&(n.TgZ(0,"p"),n._uU(1,"*Must be at Least contain 6 Chars"),n.qZA())}function T(e,s){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,h,2,0,"p",11),n.YNc(2,Z,2,0,"p",11),n.qZA()),2&e){const r=n.oxw();let t,o;n.xp6(1),n.Q6J("ngIf",null==(t=r.loginForm.get("password"))?null:t.getError("required")),n.xp6(1),n.Q6J("ngIf",null==(o=r.loginForm.get("password"))?null:o.getError("pattern"))}}function v(e,s){1&e&&(n.TgZ(0,"span"),n._UZ(1,"i",14),n.qZA())}function L(e,s){if(1&e&&(n.TgZ(0,"p",13),n._uU(1),n.qZA()),2&e){const r=n.oxw();n.xp6(1),n.hij(" ",r.errMsg," ")}}let w=(()=>{class e{constructor(r,t){this._AuthService=r,this._Router=t,this.isLoading=!1,this.errMsg="",this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)])})}handleForm(){this.isLoading=!0,!0===this.loginForm.valid&&this._AuthService.login(this.loginForm.value).subscribe({next:t=>{"success"===t.message&&(localStorage.setItem("etoken",t.token),this.isLoading=!1,this._Router.navigate(["/home"]))},error:t=>{this.errMsg=t.error.message,this.isLoading=!1}})}static#n=this.\u0275fac=function(t){return new(t||e)(n.Y36(p.e),n.Y36(u.F0))};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:21,vars:6,consts:[[1,"rounded","shadow","p-4","w-75","my-4","mx-auto","bg-light"],[1,"my-4"],[3,"formGroup","ngSubmit"],[1,"form-item","my-3"],["for","email"],["formControlName","email","id","email","type","email",1,"form-control"],["class","text-danger fw-bold w-50 mx-auto text-center mt-3",4,"ngIf"],["for","password"],["formControlName","password","id","password","type","password",1,"form-control"],[1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn","my-3",3,"disabled"],[4,"ngIf"],["routerLink","/forgetPassword"],[1,"text-danger","fw-bold","w-50","mx-auto","text-center","mt-3"],[1,"fas","fa-spin","fa-spinner"]],template:function(t,o){if(1&t&&(n.TgZ(0,"section",0)(1,"h1",1),n._uU(2,"Login Now"),n.qZA(),n.TgZ(3,"form",2),n.NdJ("ngSubmit",function(){return o.handleForm()}),n.TgZ(4,"div",3)(5,"label",4),n._uU(6,"Email"),n.qZA(),n._UZ(7,"input",5),n.YNc(8,f,3,2,"div",6),n.qZA(),n.TgZ(9,"div",3)(10,"label",7),n._uU(11,"Password"),n.qZA(),n._UZ(12,"input",8),n.YNc(13,T,3,2,"div",6),n.qZA(),n.TgZ(14,"div",9)(15,"button",10),n._uU(16,"Login "),n.YNc(17,v,2,0,"span",11),n.qZA(),n.YNc(18,L,2,1,"p",6),n.TgZ(19,"a",12),n._uU(20,"Forget Password"),n.qZA()()()()),2&t){let a,m;n.xp6(3),n.Q6J("formGroup",o.loginForm),n.xp6(5),n.Q6J("ngIf",(null==(a=o.loginForm.get("email"))?null:a.errors)&&(null==(a=o.loginForm.get("email"))?null:a.touched)),n.xp6(5),n.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),n.xp6(2),n.Q6J("disabled",o.loginForm.invalid),n.xp6(2),n.Q6J("ngIf",o.isLoading),n.xp6(1),n.Q6J("ngIf",o.errMsg)}},dependencies:[_.ez,_.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,u.rH]})}return e})()}}]);