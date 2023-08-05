import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/app.interface';
import { UserApiService } from 'src/app/http-cient/user-api.service';
import { UserDataService } from 'src/app/control-data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showLogin: boolean = true
  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor( private router: Router, private userApiService: UserApiService, private userDataService: UserDataService, private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', [ Validators.required, Validators.min(6)]],
    });
    this.formRegister = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.min(6)]],
      // confirmPassword: ['', [Validators.required]],
    });
  }
  
  show() {
    this.showLogin = !this.showLogin
  }

  ngOnInit(): void {
    if(this.userDataService.getUser() !== null) {
      this.router.navigate(['/home']);
    }
  }

  supmitLogin() {
    if (this.formLogin.valid) {
      const user: User = {...this.formLogin.value};
      this.userApiService.apiLogin(user).subscribe((data) => {
        if (data !== null) {
          this.userDataService.setUser(data);
          this.router.navigate(['/home']);
        } else {
          alert("faid");
        }
      })
    }else {
      alert("Fill in all fields");
    }
  }

  supmitRegister() {
    if (this.formRegister.valid) {
      const user: User = {...this.formRegister.value, type: 'admin'};
      this.userApiService.apiRegister(user).subscribe((data) => {
        if (data !== null) {
          this.userApiService.apiGetUser().subscribe((users) => {
            if(users !== null) {
              const lastUser: User | undefined = users[users.length - 1];
              this.userDataService.setUser(lastUser);
              alert(`Your ID: ${lastUser.id}`);
            }
          });
          this.router.navigate(['/home']);
        } else {
          alert("faid");
        }
      })
    }else {
      alert("Fill in all fields");
    }
  }
}
