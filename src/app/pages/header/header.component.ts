import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserDataService } from '../../service/user-data-service/user-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(private userDataService: UserDataService, private router: Router) {}

  logout() {
    this.userDataService.setUsername('');
    this.router.navigate([''])
  }
}
