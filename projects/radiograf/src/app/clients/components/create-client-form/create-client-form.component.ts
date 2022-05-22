import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicsService } from './../../../medics/services/medics.service';
import { IMedic } from './../../../medics/types/medic.interface';
import { CreateClientForm } from './create-client-form.class';
@Component({
  selector: 'odo-create-client-form',
  templateUrl: './create-client-form.component.html',
  styleUrls: ['./create-client-form.component.scss'],
})
export class CreateClientFormComponent
  extends CreateClientForm
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

  private enableLoading(): void {
    this.submitting = true;
  }

  private disableLoading(): void {
    this.submitting = false;
  }

  public onSubmit(): void {
    if (this.validatedForm) {
      this.medicsService.createMedic(this.createClientForm.getRawValue());
    }
  }

  private getMedic = (medic: IMedic): void => {
    if (medic?.doctorId > 0) {
      this.router.navigate(['/admin/clients']);
    } else {
      this.disableLoading();
    }
  };
}
