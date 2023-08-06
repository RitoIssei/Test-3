import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './login-component/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
