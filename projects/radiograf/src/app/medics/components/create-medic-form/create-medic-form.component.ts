import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicsService } from '../../services/medics.service';
import { IMedic } from '../../types/medic.interface';
import { CreateMedicForm } from './create-medic-form.class';

@Component({
  selector: 'odo-create-medic-form',
  templateUrl: './create-medic-form.component.html',
  styleUrls: ['./create-medic-form.component.scss'],
})
export class CreateMedicFormComponent
  extends CreateMedicForm
  implements OnInit, OnDestroy
{
  private subs: Subscription = new Subscription();

  constructor(private medicsService: MedicsService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.subs.add(this.medicsService.getMedic$().subscribe(this.getMedic));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public onSubmit(): void {
    if (this.validatedForm) {
      this.formSent = true;
      this.medicsService.createMedic(this.createMedicForm.getRawValue());
    }
  }

  private getMedic = (medic: IMedic): void => {
    if (medic?.doctorId > 0) {
      this.medicsService.medicSnackbars.successRegister();
      this.router.navigate(['/admin/medics']);
    } else {
      this.formSent = false;
    }
  };
}
