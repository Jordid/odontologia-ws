import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
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
import { MedicsService } from '../../services/medics.service';
import { MedicDataSource } from '../../types/medic-datasource';
import { IMedic } from '../../types/medic.interface';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'odo-medics-table',
  templateUrl: './medics-table.component.html',
  styleUrls: ['./medics-table.component.scss'],
})
export class MedicsTableComponent implements OnInit, AfterViewInit {
  private subs: Subscription = new Subscription();

  @Input() showPaginator = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<IMedic>;
  public dataSource: MedicDataSource = null;

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
    private medicsService: MedicsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new MedicDataSource(
      this.route,
      this.router,
      this.medicsService
    );

    this.subs.add(
      this.medicsService.getDeletedMedic$().subscribe(this.getDeletedMedic)
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

  viewMedic(medic: IMedic): void {
    if (medic) {
    }
  }

  editMedic(medic: IMedic): void {
    if (medic?.doctorId) {
      this.router.navigate([`/admin/medics/${medic?.doctorId}/update`]);
    }
  }

  deleteMedic(medic: IMedic): void {
    if (medic?.doctorId) {
      const data: ConfirmationDialogData = {
        title: `¿Estás seguro de eliminar el médico?`,
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
            this.medicsService.deleteMedic(medic?.doctorId);
          }
        })
      );
    }
  }

  private getDeletedMedic = (deletedMedic: boolean): void => {
    if (deletedMedic === true) {
    }
  };
}
