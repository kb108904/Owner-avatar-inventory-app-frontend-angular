import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  form: FormGroup;

  get email() {
    return this.form.value.email;
  }

  get password() {
    return this.form.value.password;
  }

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authenticationService.SignUp(this.email, this.password);
    return false;
  }

}
