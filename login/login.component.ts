import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  login() {
    // Perform login logic here
    console.log('Logging in...', this.username, this.password);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
