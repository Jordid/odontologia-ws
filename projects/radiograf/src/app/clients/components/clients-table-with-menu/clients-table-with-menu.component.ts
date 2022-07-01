import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { IClient } from '../../types/client.interface';

@Component({
  selector: 'odo-clients-table-with-menu',
  templateUrl: './clients-table-with-menu.component.html',
  styleUrls: ['./clients-table-with-menu.component.scss'],
})
export class ClientsTableWithMenuComponent {
  public clients$: Observable<IClient[]> = this.clientsService
    .getClients$()
    .pipe(shareReplay(1));

  constructor(private clientsService: ClientsService) {}
}
