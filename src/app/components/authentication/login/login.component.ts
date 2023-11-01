import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  // Injecting Dependencies
  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  toastrService = inject(ToastrService);

  constructor() {
    this.loginForm = this.fb.group({
      email: [
        'logisticstest@dispatchdemo.com',
        [Validators.required, Validators.email],
      ],
      password: ['12345678', [Validators.required]],
      // rememberMe: [false],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.getRawValue());

    this.authService.login(this.loginForm.getRawValue()).subscribe({
      next: (value) => {
        console.log('value: ', value);
        this.toastrService.success("Log In Successfully");
        this.router.navigate(['/loads/loads-list']);
      },
      error: (err) => {
        console.log('err: ', err);
        this.toastrService.error(err);
      },
      complete() {},
    });
  }

  
}
