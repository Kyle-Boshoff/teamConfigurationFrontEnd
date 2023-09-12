import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private userService:UserService,private formBuilder:FormBuilder){
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    
  }

  logIn(){
    this.userService.login(this.formLogin).subscribe(data=>{
      console.log(data);
      
    })
  }

}
