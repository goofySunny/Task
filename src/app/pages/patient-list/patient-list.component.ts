import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface Patient {
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
  visitDate: Date;
}

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent {
  editing = false;

  id = 1;

  patients: Patient[] = [
    { id: this.id++, name: "علی", description: "مریض", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "حسین", description: "مشکل تنفسی", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "نیما", description: "autism", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
    { id: this.id++, name: "جیمی", description: "اعتماد بنفس", phoneNumber: "09188181128", visitDate: new Date("1380/12/12") },
  ]

  addPatient: any = { id: 123124123, name: "", description: "", phoneNumber: "", visitDate: new Date() };
  targetedUpdate : any = { id: 123124123, name: "", description: "", phoneNumber: "", visitDate: new Date() };

  constructor() {

  }

  editPatient(id: number) {
    this.editing = true;
    this.targetedUpdate = { ...this.patients.find(patient => patient.id == id)}
    this.addPatient = { ...this.patients.find(patient => patient.id == id) };
    this.openAddPanel();
  }

  openAddPanel() {
    document.getElementById("modal")!.style.display = "flex";
  }

  closeModal() {
    document.getElementById("modal")!.style.display = "none";
  }

  editPatientSave() {
    let targetedPatient = this.patients.findIndex(patient => patient.id == this.targetedUpdate.id);
    this.patients[targetedPatient] = this.addPatient
    this.closeModal();
    this.editing = false;
    this.resetAddPatientForm();
  }

  appendPatient() {
    this.editing = false;
    if (this.addPatient.description !== "" && this.addPatient.name !== "") {
      const newPatient: Patient = { ...this.addPatient, id: this.id++ };

      this.patients.push(newPatient);
      this.resetAddPatientForm();
      this.closeModal();
    }
  }

  cancelPatient(id: number) {
    this.patients = this.patients.filter(patient => patient.id !== id)
  }

  resetAddPatientForm(): void {
    this.addPatient = { id: 0, name: "", description: "", phoneNumber: "", visitDate: new Date() };
  }
}
