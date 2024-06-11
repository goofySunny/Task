import { Component, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCommunicationService } from '../../service/component-communication/component-communication.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {


  constructor(private componentCommunicationService:ComponentCommunicationService) { }
  /* Set the width of the side navigation to 250px */
  openNav() {
    console.log('call taken')
    document.getElementById("mySidenav")!.style.width = "250px";
    this.componentCommunicationService.toggleHeader();
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    this.componentCommunicationService.toggleHeader();
  }
}
