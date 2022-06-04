import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmationDialogData } from '../../../core/types/dialogs/confirmation-dialog-data';
import { OdoDialogConfig } from '../../../core/types/dialogs/odo-dialog-config';
import { ConfirmationDialogComponent } from '../../../shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ClientsService } from '../../services/clients.service';
import { ClientDataSource } from '../../types/client-datasource';
import { IClient } from '../../types/client.interface';

@Component({
  selector: 'odo-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
})
export class ClientsTableComponent implements OnInit, AfterViewInit {
  private subs: Subscription = new Subscription();

  @Input() showPaginator = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<IClient>;
  public dataSource: ClientDataSource = null;

  public displayedColumns: string[] = [
    'avatar',
    'firstName',
    'lastName',
    'documentType',
    'document',
    'email',
    'specialty',
    'age',
    'status',
    'actions',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new ClientDataSource(
      this.route,
      this.router,
      this.clientsService
    );

    this.subs.add(
      this.clientsService.getDeletedClient$().subscribe(this.getDeletedClient)
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewClient(client: IClient): void {
    if (client) {
    }
  }

  editClient(client: IClient): void {
    if (client?.clientId) {
      this.router.navigate([`/admin/clients/${client?.clientId}/update`]);
    }
  }

  deleteClient(client: IClient): void {
    if (client?.clientId) {
      const data: ConfirmationDialogData = {
        title: `¿Estás seguro de eliminar el paciente?`,
        cancelColorButton: `light-blue`,
        confirmColorButton: `light-pink`,
        confirmMatIcon: `delete`,
        confirmText: `Eliminar`,
      };

      const dialogConfig = new OdoDialogConfig<ConfirmationDialogData>();
      dialogConfig.data = data;
      dialogConfig.width = '500px';

      const dialog = this.dialog.open<
        ConfirmationDialogComponent,
        ConfirmationDialogData,
        boolean
      >(ConfirmationDialogComponent, dialogConfig);
      this.subs.add(
        dialog.afterClosed().subscribe((result) => {
          if (result && result == true) {
            this.clientsService.deleteClient(client?.clientId);
          }
        })
      );
    }
  }

  private getDeletedClient = (deletedClient: boolean): void => {
    if (deletedClient === true) {
    }
  };
}
