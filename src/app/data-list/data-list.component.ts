import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent {
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
}
