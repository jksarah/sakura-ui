import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared.scss','./login.component.scss']
})
export class LoginComponent {
loginForm:FormGroup

constructor(
  public fb:FormBuilder,
  public authService:AuthService,
  public router:Router,

){
  this.loginForm=this.fb.group({
    email:[""],
    password:[""]
  })
}

login(){
try {
  this.authService.login(this.loginForm.value)
} catch (error) {
  console.error(error)
}
}
}
