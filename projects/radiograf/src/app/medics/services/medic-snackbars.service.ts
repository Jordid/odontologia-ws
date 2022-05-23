import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicSnackbars } from '../types/medic-snackbars.config';

@Injectable({
  providedIn: 'root',
})
export class MedicSnackbarsService {
  constructor(private snackbar: MatSnackBar) {}

  public successRegister(): void {
    this.snackbar.open(
      MedicSnackbars.successRegister.message,
      MedicSnackbars.successRegister.closeBtn,
      MedicSnackbars.successRegister.config
    );
  }

  public successUpdated(): void {
    this.snackbar.open(
      MedicSnackbars.successUpdated.message,
      MedicSnackbars.successUpdated.closeBtn,
      MedicSnackbars.successUpdated.config
    );
  }
}
