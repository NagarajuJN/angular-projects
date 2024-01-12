import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required],Validators.minLength(6)]
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      // Perform login logic using formData (e.g., send to backend API)
      console.log('Login user:', formData);
    }
  }
}
