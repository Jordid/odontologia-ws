import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { MedicsService } from '../../services/medics.service';
import { IMedic } from '../../types/medic.interface';

@Component({
  selector: 'odo-medics-table-with-menu',
  templateUrl: './medics-table-with-menu.component.html',
  styleUrls: ['./medics-table-with-menu.component.scss'],
})
export class MedicsTableWithMenuComponent {
  public medics$: Observable<IMedic[]> = this.medicsService
    .getMedics$()
    .pipe(shareReplay(1));

  constructor(private medicsService: MedicsService) {}
}
