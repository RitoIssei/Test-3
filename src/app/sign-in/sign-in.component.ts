import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  showLogin: boolean = true
  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [ Validators.required, Validators.min(6)]],
    });
    this.formRegister = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.min(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  
  show() {
    this.showLogin = !this.showLogin
  }
}
