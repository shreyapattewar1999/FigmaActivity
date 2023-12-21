import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapContainerComponent } from '../map-container/map-container.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbModule, MapContainerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMapClicked: Boolean = true;
  dataItems: any = [];

  constructor() {
    this.dataItems = [
      {
        name: 'Work Flow: Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: 'Uncomplete',
      },
      {
        name: 'Work Flow: Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: 'Low Risk',
      },
      {
        name: 'Work Flow: Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: 'Uncomplete',
      },
      {
        name: 'Work Flow: Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: 'Needs Review',
      },
    ];
  }

  toggleBtn(): void {
    this.isMapClicked = !this.isMapClicked;
  }
}
