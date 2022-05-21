import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPerson } from '../../../core/types/person.interface';
import { MedicsService } from '../../services/medics.service';
import { IMedic } from '../../types/medic.interface';
import { CreateMedicForm } from '../create-medic-form/create-medic-form.class';

@Component({
  selector: 'odo-update-medic-form',
  templateUrl: './update-medic-form.component.html',
  styleUrls: ['./update-medic-form.component.scss'],
})
export class UpdateMedicFormComponent
  extends CreateMedicForm
  implements OnInit, OnDestroy
{
  private hasDoctorId: boolean = this.route.snapshot.paramMap.has('doctorId');
  private doctorId: string = this.route.snapshot.paramMap.get('doctorId');

  private subs: Subscription = new Subscription();

  private formSent = false;

  constructor(
    private medicsService: MedicsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.subs.add(this.medicsService.getMedic$().subscribe(this.getMedic));
    if (this.hasDoctorId) {
      this.medicsService.getMedic(parseInt(this.doctorId));
    }
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
    if (this.validatedForm && this.hasDoctorId) {
      this.enableLoading();
      this.formSent = true;
      this.medicsService.updateMedic(
        parseInt(this.doctorId),
        this.createMedicForm.getRawValue()
      );
    }
  }

  private getMedic = (medic: IMedic): void => {
    if (medic?.doctorId > 0) {
      this.populateMedicForm(medic?.person);
      if (this.formSent) {
        this.router.navigate(['/admin/medics']);
      }
    }
    this.disableLoading();
  };

  private populateMedicForm(person: IPerson): void {
    this.firstName.setValue(person?.firstName);
    this.lastName.setValue(person?.lastName);
    this.gender.setValue(person?.gender);
    this.email.setValue(person?.user?.email);
    this.document.setValue(person?.document);
  }
}
