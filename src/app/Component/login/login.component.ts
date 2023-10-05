import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  constructor(private loginservice: LoginService, private router: Router){}

  form : FormGroup = new FormGroup({
     email: new FormControl('', Validators.required),
     password: new FormControl('',Validators.required),
  })

  login(){
    this.loginservice.getlogin(this.form.value).subscribe(
      (data:any)=>{
        alert("Login page is successfully");
        console.log(this.form.value);
        this.router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Login page is failed");
      }
    )
  }
}
