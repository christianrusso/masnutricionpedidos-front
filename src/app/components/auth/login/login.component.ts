import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from '../AuthData';
import { LoginUserData } from 'src/app/models/usuario';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public showPassword: boolean = false;
  isLoading = false;
  error: boolean = true;
  loginNuevo: boolean = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.error = false;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(form: NgForm) {
    const authData: AuthData = {
      NickName: form.value.NickName,
      Password: form.value.Password,
    };
    this.authService.postLogin(authData).subscribe(
      (response) => {
        if(response.token){
          this.authService.saveAuthData(response as LoginUserData);
          this.router.navigateByUrl('/home/bienvenida');
        }
        else {
          this.error = true;
        }
      }, error => {
        console.log(error);
      }
    )
    // if (!this.loginNuevo) {
    //   const a = this.authService.postLogin(authData);
    //   this.loginNuevo = true;
    //   console.log(a);
    // }else{
    //   if (this.authService.getIsAuth() == false || this.error == true) {
    //     this.error = true;
    //   } else {
    //     this.error = false;
    //   }
    // }
  }
}
