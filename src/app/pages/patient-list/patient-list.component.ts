import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent {



  constructor() {

  }

  openAddPanel() {
    document.getElementById("modal")!.style.display = "flex";
  }
  
  closeModal() {
    document.getElementById("modal")!.style.display = "none";
  }
}
