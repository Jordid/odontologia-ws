import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarConfig } from '../../core/config/snackbars/snackbar.config';

export const MedicSnackbars = {
  successRegister: {
    message: `Médico creado exitosamente.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  },

  successUpdated: {
    message: `Médico actualizado exitosamente.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  },

  /* failureValidationError: {
    message: `Falta un campo obligatorio`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  }, */
};
