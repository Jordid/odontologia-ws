import { SnackbarConfig } from '../../../config/snackbars/snackbar.config';

export const GuardOAuthSnackbars = {
  failOAuth: {
    message: `Inicia sesión.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    },
  },
  failNotOAuth: {
    message: `Ya has iniciado sesión.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    },
  },
};
