import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {


  constructor() {}
/* Set the width of the side navigation to 250px */
openNav() {
  console.log('call taken')
  document.getElementById("mySidenav")!.style.width = "250px";
}

/* Set the width of the side navigation to 0 */
closeNav() {
  document.getElementById("mySidenav")!.style.width = "0";
}
}
