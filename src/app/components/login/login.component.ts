import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormControlOptions, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  isLoading:boolean=false;
  errMsg:string = '';
  loginForm:FormGroup =new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),

  })

  handleForm():void{
    this.isLoading=true;
    const userData =this.loginForm.value;
    if(this.loginForm.valid === true){
      this._AuthService.login(userData).subscribe({
        next:(response)=>{
          if(response.message === 'success'){
            localStorage.setItem('etoken', response.token);
            this.isLoading=false;
            this._Router.navigate(['/home'])
          }
        },error: (err) =>{
          this.errMsg = err.error.message;
          this.isLoading=false
        }
      })
    }

  }
}
