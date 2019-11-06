import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../../../core/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = [
    'nit',
    'fullname',
    'address',
    'phone',
    'actions',
  ];
  dataSource;

  constructor(
    private _clientService: ClientService,
  ) { }

  ngOnInit() {
    this._clientService.getClients().subscribe(clients => this.dataSource = clients);
  }

}
