import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const toggleIcon = document.getElementById('my-image') as HTMLImageElement;
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.src = "assets/Disable.svg";
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.src = 'assets/Enable.svg';
    }
  }
}
