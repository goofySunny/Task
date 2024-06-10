import { Component } from '@angular/core';
import { UserDataService } from '../../service/user-data-service/user-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  username : string = this.userDataService.username;

  constructor(private userDataService: UserDataService) {}
}
