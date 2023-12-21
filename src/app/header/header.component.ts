import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapContainerComponent } from '../map-container/map-container.component';
import { DataListComponent } from '../data-list/data-list.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbModule, MapContainerComponent, DataListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMapClicked: Boolean = true;

  constructor() {}

  toggleBtn(): void {
    this.isMapClicked = !this.isMapClicked;
  }
}
