import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from '../AuthData';

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
  public token: any;
  private tokenTimer: any;
  error: boolean = true;
  loginNuevo: boolean = false;
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private authService: AuthService) {}

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
    if (!this.loginNuevo) {
      this.authService.postLogin(authData);
      this.loginNuevo = true;
    }else{
      if (this.authService.getIsAuth() == false || this.error == true) {
        this.error = true;
  
        alert('te loguaste mal');
        location.reload();
      } else {
        this.error = false;
      }
    }



  }
}
