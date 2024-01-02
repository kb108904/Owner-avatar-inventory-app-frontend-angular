import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
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
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authenticationService.SignIn(this.email, this.password);
    return false;
  }
}
