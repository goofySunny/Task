import { Component } from '@angular/core';
import { UserDataService } from '../../service/user-data-service/user-data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  username: string = '';


  constructor(private userDataService: UserDataService, private route: Router) {
  }

  signIn() {
    this.userDataService.setUsername(this.username);
    this.route.navigate(['dashboard']);
  }


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
