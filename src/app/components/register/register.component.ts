import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',                             
  templateUrl: './register.component.html',
  styleUrls: ['../shared.scss','./register.component.scss']
})
export class RegisterComponent {
registerForm: FormGroup;

constructor(
  public fb: FormBuilder,public authService:AuthService,public router:Router
)
{
this.registerForm = this.fb.group({
  name:[" "],
  email:[""],
  password:[""],
  mobile:[""],
})
}

register(){
  this.authService.signup(this.registerForm.value).subscribe(res=>{
    if(res.result){
      this.registerForm.reset()
      this.router.navigate(['login'])
    }
  })
}
}
