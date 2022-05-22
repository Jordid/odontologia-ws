import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { IClient } from '../../types/client.interface';
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

  constructor(private clientsService: ClientsService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.subs.add(this.clientsService.getClient$().subscribe(this.getClient));
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
      this.clientsService.createClient(this.createClientForm.getRawValue());
    }
  }

  private getClient = (client: IClient): void => {
    if (client?.clientId > 0) {
      this.router.navigate(['/admin/clients']);
    } else {
      this.disableLoading();
    }
  };
}
