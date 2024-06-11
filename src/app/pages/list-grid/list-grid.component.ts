import { Component } from '@angular/core';

@Component({
  selector: 'app-list-grid',
  standalone: true,
  imports: [],
  templateUrl: './list-grid.component.html',
  styleUrl: './list-grid.component.scss'
})
export class ListGridComponent {

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
