import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() showPaginator = true;
  @ViewChild(MatSort) sort!: MatSort;
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
    private medicsService: MedicsService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MedicDataSource(
      this.route,
      this.router,
      this.medicsService
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewMedic(medic: IMedic): void {
    console.log('medic: ', medic);
    if (medic) {
    }
  }
}
