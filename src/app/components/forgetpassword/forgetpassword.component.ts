import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}

  email:string=''

  successMsg:any
  errorMsg:any

  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;

  forgetPassword:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email])
  })

  forgetPass():void{

    let userEmail = this.forgetPassword.value
    this.email = userEmail.email
    this._AuthService.forget(userEmail).subscribe({
      next:(response)=>{
        console.log(response)
        this.successMsg = response.message
        this.errorMsg = false
        this.step1=false
        this.step2=true
      },
      error:(err)=>{
        this.errorMsg = err.error.message
        this.successMsg = false
      }
    })
  }
  resetCode:FormGroup = new FormGroup({
    resetCode:new FormControl('',)
  })

  reCode():void{
    let userCode = this.resetCode.value
    this._AuthService.resetCode(userCode).subscribe({
      next:(response)=>{
        console.log(response)
        this.successMsg = response.status
        this.errorMsg = false
        this.step2=false
        this.step3=true
      },
      error:(err)=>{
        this.errorMsg = err.error.message
        this.successMsg = false
      }
    })
  }
  resetPassword:FormGroup = new FormGroup({
    newPassword:new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])
  })

  rePassword():void{

    let resetForm = this.resetPassword.value
    resetForm.email = this.email
    this._AuthService.rePass(resetForm).subscribe({
      next:(response)=>{
        if(response.token){
          this._Router.navigate(['/login'])
        }
      }
    })
  }
}
