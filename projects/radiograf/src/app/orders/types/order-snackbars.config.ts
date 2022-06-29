import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarConfig } from '../../core/config/snackbars/snackbar.config';

export const OrderSnackbars = {
  successGeneratedOrder: {
    message: `Orden generada con éxito.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  },

  failureGeneratedOrder: {
    message: `Error al generar la orden.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },

  successSentOrder: {
    message: `Orden enviada con éxito.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  },

  failureSentOrder: {
    message: `Error al enviar la orden.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },

  failureGetOrder: {
    message: `Error al recuperar los datos de la orden.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },

  successDeleteExam: {
    message: `Exámen eliminado con éxito.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.success,
      duration: SnackbarConfig.durations.success,
    } as MatSnackBarConfig,
  },

  failureDeleteExam: {
    message: `Error al eliminar el exámen.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },
};
