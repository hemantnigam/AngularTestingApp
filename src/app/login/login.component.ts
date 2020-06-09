import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMsg: string;
  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.loginForm = formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  login(){
    if(this.loginForm.value.username === "admin" && this.loginForm.value.password === "admin1234")
      this.router.navigate(['dashboard']);
    else
      this.errorMsg = "username or password is not correct."
  }

  get formControls() {
    return this.loginForm.controls
  }
}
