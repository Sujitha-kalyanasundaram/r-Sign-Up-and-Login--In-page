import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  showLogin = false; // Start with registration form

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  onLogin() {
    const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const password = (document.getElementById('inputPassword') as HTMLInputElement).value;
    console.log('Logged in with:', email, password);
  }

  onRegister() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('regPassword') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    
    // Here, you can add your registration logic (e.g., API call)
    console.log('Registered with:', username, password, confirmPassword);

    // After successful registration, switch to the login form
    if (password === confirmPassword) {
      this.showLogin = true; // Switch to login form
    } else {
      console.error('Passwords do not match');
    }
  }
}
