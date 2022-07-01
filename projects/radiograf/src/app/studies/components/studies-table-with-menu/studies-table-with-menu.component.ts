import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { StudiesService } from '../../services/studies.service';
import { IStudy } from '../../types/study.interface';

@Component({
  selector: 'odo-studies-table-with-menu',
  templateUrl: './studies-table-with-menu.component.html',
  styleUrls: ['./studies-table-with-menu.component.scss'],
})
export class StudiesTableWithMenuComponent {
  public studies$: Observable<IStudy[]> = this.studiesService
    .getStudies$()
    .pipe(shareReplay(1));

  constructor(private studiesService: StudiesService) {}
}
