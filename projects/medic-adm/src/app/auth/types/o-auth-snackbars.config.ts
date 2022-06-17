import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarConfig } from '../../core/config/snackbars/snackbar.config';

export const OAuthSnackbars = {
  failureLoginInvalidCredentials: {
    message: `Usuario o contraseña incorrectos.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },
  genericLoginError: {
    message: `Error al iniciar sesión. Recargue la página e intente nuevamente. Si el problema persiste couníquese con soporte.`,
    closeBtn: SnackbarConfig.strings.close,
    config: {
      panelClass: SnackbarConfig.classes.danger,
      duration: SnackbarConfig.durations.danger,
    } as MatSnackBarConfig,
  },
};
