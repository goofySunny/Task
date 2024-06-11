import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  showHeader : boolean = true;

  constructor() { }

  toggleHeader() {
    if (this.showHeader) {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

}
