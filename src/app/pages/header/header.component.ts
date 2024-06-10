import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserDataService } from '../../service/user-data-service/user-data.service';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(private userDataService: UserDataService, private router: Router, private sideNavComponent: SideNavComponent) {}

  logout() {
    this.userDataService.setUsername('');
    this.router.navigate([''])
  }

  navOpen() {
    console.log('called SideNavComponent')
    this.sideNavComponent.openNav();
  }

  isUserLoggedIn() {
    return this.userDataService.isUserLoggedIn()
  }
}
