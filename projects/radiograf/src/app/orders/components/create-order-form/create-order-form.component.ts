import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'odo-create-order-form',
  templateUrl: './create-order-form.component.html',
  styleUrls: ['./create-order-form.component.scss'],
})
export class CreateOrderFormComponent implements OnInit {
  medicCode: number = null;
  clientCode: number = null;

  constructor() {}

  ngOnInit(): void {}

  onMedicCodeChange(medicCode: string): void {
    if (medicCode) {
      this.medicCode = parseInt(medicCode);
    } else {
      this.medicCode = null;
    }
  }
  onClientCodeChange(clientCode: string): void {
    if (clientCode) {
      this.clientCode = parseInt(clientCode);
    } else {
      this.clientCode = null;
    }
  }
}
