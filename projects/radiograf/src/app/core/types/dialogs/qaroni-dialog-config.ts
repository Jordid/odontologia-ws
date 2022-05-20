import { MatDialogConfig } from '@angular/material/dialog';

export class QaroniDialogConfig<D = any> extends MatDialogConfig<D> {
  constructor() {
    super();
    this.autoFocus = false;
    this.disableClose = true;
    this.panelClass = 'qaroni-style-close-dialog';
    this.width = '786px';
  }
}
