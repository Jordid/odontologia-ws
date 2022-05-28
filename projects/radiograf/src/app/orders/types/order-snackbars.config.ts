import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarConfig } from '../../core/config/snackbars/snackbar.config';

export const OrderSnackbars = {
  successGenerated: {
    message: `Orden generada exitosamente.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  },

  failureGenerated: {
    message: `Error al generar la orden.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },
};
