import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signupForm: FormGroup;
  showMessage = false;
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }

  registerUser() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      // Perform registration logic using formData (e.g., send to backend API)
      console.log('Register user:', formData);
    }
  }
  onSubmit() {
    // Add your form submission logic here
    // For example, if the signup is successful:
    this.showMessage = true;
    this.message = 'Sign up successful!'; // Display your message
    // Or if signup fails:
    // this.showMessage = true;
    // this.message = 'Sign up failed! Please try again.';
  }
}
