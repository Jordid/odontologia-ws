import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IClient } from '../../../clients/types/client.interface';
import { IMedic } from '../../../medics/types/medic.interface';
import { IOrder } from '../../types/order.interface';

@Component({
  selector: 'odo-oder-patient-and-medic-preview',
  templateUrl: './oder-patient-and-medic-preview.component.html',
  styleUrls: ['./oder-patient-and-medic-preview.component.scss'],
})
export class OderPatientAndMedicPreviewComponent implements OnChanges {
  @Input() order: IOrder;

  medic: IMedic;
  patient: IClient;

  ngOnChanges(changes: SimpleChanges): void {
    this.medic = this.order?.doctor;
    this.patient = this.order?.client;
  }
}
