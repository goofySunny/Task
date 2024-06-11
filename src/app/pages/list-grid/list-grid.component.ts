import { Component } from '@angular/core';
import { Patient } from '../patient-list/patient-list.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list-grid',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './list-grid.component.html',
  styleUrl: './list-grid.component.scss'
})
export class ListGridComponent {
  id = 1;

  patients: Patient[] = [
    { id: this.id++, name: "علی", description: "مریض", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "حسین", description: "مشکل تنفسی", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "نیما", description: "autism", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "جیمی", description: "اعتماد بنفس", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "جیمی", description: "اعتماد بنفس", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "جیمی", description: "اعتماد بنفس", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "جیمی", description: "اعتماد بنفس", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "جیمی", description: "اعتماد بنفس", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
  ]

  elements = document.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>;
  i = 0;
  // List View
  listView() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "100%";
    }
  }

  // Grid View
  gridView() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "50%";
    }
  }
}
