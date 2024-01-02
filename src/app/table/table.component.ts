import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  constructor(private value: RequestService) { }
  displayedColumns: string[] = ['name', 'Name', 'Email', 'Phone', 'quantity','price', 'DateOfOrder'];
  dataSource = this.value.getAllRequests();
}
